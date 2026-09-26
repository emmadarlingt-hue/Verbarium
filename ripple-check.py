"""
ripple-check.py — Verbarium Ripple Check
Emma Darling · first Python tool

Reads script.js and index.html, counts the entries, finds duplicate
headwords, tallies volumes, and checks the footer number matches.

Run it with:  python3 ripple-check.py
"""

import re  # 're' is Python's pattern-matching toolkit. More on this below.


# ---------------------------------------------------------------
# SETTINGS — the only bit you edit
# ---------------------------------------------------------------
# These are 'variables': named boxes holding a value.
# Change the paths here and the whole script follows.

SCRIPT_JS = "script.js"
INDEX_HTML = "index.html"


# ---------------------------------------------------------------
# FUNCTIONS — named jobs the script can do
# ---------------------------------------------------------------
# A function is a recipe you write once and call by name whenever
# you need it. 'def' means "define a new one".

def read_file(path):
    """Open a file and hand back all its text as one long string."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        # A friendly message instead of a wall of red error text.
        print(f"Couldn't find: {path}")
        print("Check the path at the top of this script and try again.")
        raise SystemExit(1)


def find_headwords(text):
    """Pull every headword out of script.js and return them as a list."""
    # This pattern means: a line starting with optional spaces, then
    # word: then a quote mark, then capture everything up to the
    # closing quote. That captured bit is the headword.
    pattern = r'^\s*word:\s*["\']([^"\']+)["\']'
    return re.findall(pattern, text, re.MULTILINE)


def find_volumes(text):
    """Pull every volume number out of script.js."""
    pattern = r'^\s*vol:\s*["\']([^"\']+)["\']'
    return re.findall(pattern, text, re.MULTILINE)


def find_duplicates(items):
    """Return any item that appears more than once (ignoring case)."""
    seen = []          # an empty list — a shopping list you add to
    duplicates = []
    for item in items:                  # a loop: do this once per item
        lowered = item.lower()
        if lowered in seen:
            if item not in duplicates:
                duplicates.append(item)
        else:
            seen.append(lowered)
    return duplicates


def tally(items):
    """Count how many times each thing appears. Returns a dictionary."""
    # A dictionary is a set of labelled drawers: "VII" -> 26
    counts = {}
    for item in items:
        if item in counts:
            counts[item] = counts[item] + 1
        else:
            counts[item] = 1
    return counts



# --- Reading the footer, which is written in words, not digits -----

UNITS = ["zero", "one", "two", "three", "four", "five", "six", "seven",
         "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
         "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

TENS = ["", "", "twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"]


def number_to_words(n):
    """Turn 152 into 'one hundred and fifty-two'."""
    if n < 20:
        return UNITS[n]
    if n < 100:
        tens, unit = divmod(n, 10)          # divmod(52, 10) gives 5 and 2
        if unit == 0:
            return TENS[tens]
        return TENS[tens] + "-" + UNITS[unit]
    hundreds, rest = divmod(n, 100)
    words = UNITS[hundreds] + " hundred"
    if rest:
        # A function calling itself for the leftover bit. Perfectly normal.
        words += " and " + number_to_words(rest)
    return words


def normalise(text):
    """Flatten HTML into plain lowercase words so we can search it."""
    text = re.sub(r"&[a-z]+;", " ", text)    # strip &middot; &nbsp; etc
    text = re.sub(r"<[^>]+>", " ", text)     # strip <em> tags etc
    return re.sub(r"\s+", " ", text).lower()  # squash all whitespace


def check_footer(html_text, entry_count, volume_count):
    """Check the footer's spelled-out numbers against reality."""
    flat = normalise(html_text)

    expected_entries = number_to_words(entry_count)
    expected_volumes = number_to_words(volume_count) + " volumes"

    if expected_entries in flat:
        print(f"index.html        coinages: '{expected_entries}' — MATCHES")
    else:
        print(f"index.html        coinages: MISMATCH — footer should read")
        print(f"                  '{expected_entries.capitalize()} coinages'")

    if expected_volumes in flat:
        print(f"                  volumes:  '{expected_volumes}' — MATCHES")
    else:
        print(f"                  volumes:  MISMATCH — should read")
        print(f"                  '{expected_volumes.capitalize()}'")


# ---------------------------------------------------------------
# THE MAIN RUN
# ---------------------------------------------------------------

def main():
    print("=" * 46)
    print("  VERBARIUM RIPPLE CHECK")
    print("=" * 46)
    print()

    script_text = read_file(SCRIPT_JS)
    headwords = find_headwords(script_text)
    volumes = find_volumes(script_text)

    # An f-string: the f lets you drop variables into text with { }
    print(f"script.js         {len(headwords)} entries")

    # --- duplicates ---
    dupes = find_duplicates(headwords)
    if dupes:
        print(f"DUPLICATES        {len(dupes)} found -> {', '.join(dupes)}")
    else:
        print("Duplicates        none")

    # --- volume tally ---
    print()
    print("Entries by volume:")
    counts = tally(volumes)
    for vol in sorted(counts):
        print(f"  Vol. {vol:<6} {counts[vol]}")

    # --- footer cross-check ---
    print()
    html_text = read_file(INDEX_HTML)
    check_footer(html_text, len(headwords), len(counts))

    print()
    print("=" * 46)


# This line means: only run main() when the file is run directly.
if __name__ == "__main__":
    main()
