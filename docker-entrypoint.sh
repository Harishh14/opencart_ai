#!/usr/bin/env sh
set -e

# Default to "all" if no suite is provided
SUITE="${1:-all}"

case "$SUITE" in
all)
  # Remove the first argument ($1) if at least one argument exists
  [ "$#" -gt 0 ] && shift
  echo "==> Running ALL tests (args: $@)"
  exec npx playwright test "$@"
  ;;

sanity|regression|web|api|master|e2e|datadriven|login)
  # Remove the suite name argument so only extra flags remain in "$@"
  [ "$#" -gt 0 ] && shift
  echo "==> Running '$SUITE' tests (args: $@)"
  exec npm run "test:${SUITE}" -- "$@"
  ;;

*)
  echo "Error: Unknown test suite '$SUITE'"
  echo ""
  echo "Usage: $0 {all|sanity|regression|web|api|master|e2e|datadriven} [playwright-args...]"
  echo ""
  echo "Available test suites:"
  echo "  all         Run all tests (default)"
  echo "  sanity      Run sanity tests (@sanity)"
  echo "  regression  Run regression tests (@regression)"
  echo "  web         Run web tests (@web)"
  echo "  login         Run web tests (@login)"
  echo "  api         Run API tests (@api)"
  echo "  master      Run master tests (@master)"
  echo "  e2e         Run e2e tests (@e2e)"
  echo "  datadriven  Run data-driven tests (@datadriven)"
  exit 1
  ;;
esac