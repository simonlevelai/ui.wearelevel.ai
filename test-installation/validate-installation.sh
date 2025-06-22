#!/bin/bash

echo "🧪 Level AI Design System Installation Validator"
echo "================================================"
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counters
TESTS_PASSED=0
TESTS_FAILED=0
TESTS_TOTAL=0

# Function to run a test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -n "Testing $test_name... "
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    if eval "$test_command" >/dev/null 2>&1; then
        echo -e "${GREEN}✅ PASSED${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
}

# Function to run a test with output
run_test_with_output() {
    local test_name="$1"
    local test_command="$2"
    
    echo -e "${BLUE}Testing $test_name...${NC}"
    TESTS_TOTAL=$((TESTS_TOTAL + 1))
    
    if eval "$test_command"; then
        echo -e "${GREEN}✅ PASSED${NC}"
        TESTS_PASSED=$((TESTS_PASSED + 1))
    else
        echo -e "${RED}❌ FAILED${NC}"
        TESTS_FAILED=$((TESTS_FAILED + 1))
    fi
    echo
}

echo "1. Environment Checks"
echo "--------------------"
run_test "Node.js installed" "node --version"
run_test "npm installed" "npm --version"
run_test "Git installed" "git --version"
echo

echo "2. Repository Status"
echo "-------------------"
run_test_with_output "Git repository status" "git status --porcelain | wc -l | grep -q '^0$'"
run_test_with_output "Remote origin set" "git remote get-url origin | grep -q 'wearelevelai/ui.wearelevel.ai'"
echo

echo "3. Package Configuration"
echo "-----------------------"
run_test ".npmrc file exists" "test -f .npmrc"
run_test ".npmrc contains wearelevelai registry" "grep -q '@wearelevelai:registry' .npmrc"
run_test "package.json exists" "test -f package.json"
echo

echo "4. GitHub Packages Test"
echo "----------------------"
if [ -f .npmrc ] && grep -q "YOUR_GITHUB_TOKEN" .npmrc; then
    echo -e "${YELLOW}⚠️  WARNING: .npmrc contains placeholder token${NC}"
    echo -e "${YELLOW}   Please replace YOUR_GITHUB_TOKEN with your actual GitHub token${NC}"
    echo -e "${YELLOW}   Get token from: https://github.com/settings/tokens${NC}"
    echo
else
    echo "Attempting to check package availability..."
    run_test_with_output "Can access @wearelevelai packages" "npm view @wearelevelai/design-system-web version"
fi

echo "5. Build System Test"
echo "-------------------"
run_test "pnpm lockfile exists" "test -f pnpm-lock.yaml"
run_test "turbo.json exists" "test -f turbo.json"
run_test "Build scripts work" "npm run build --dry-run"
echo

echo "6. Storybook Test"
echo "----------------"
STORYBOOK_URL="https://wearelevelai.github.io/ui.wearelevel.ai/"
echo "Checking Storybook deployment at: $STORYBOOK_URL"
if curl -s --head "$STORYBOOK_URL" | head -n 1 | grep -q "200 OK"; then
    echo -e "${GREEN}✅ Storybook is live and accessible${NC}"
    TESTS_PASSED=$((TESTS_PASSED + 1))
else
    echo -e "${YELLOW}⚠️  Storybook not yet deployed or accessible${NC}"
    echo -e "${YELLOW}   Check GitHub Actions: https://github.com/wearelevelai/ui.wearelevel.ai/actions${NC}"
    TESTS_FAILED=$((TESTS_FAILED + 1))
fi
TESTS_TOTAL=$((TESTS_TOTAL + 1))
echo

echo "7. Documentation Test"
echo "--------------------"
run_test "README exists" "test -f README.md"
run_test "Getting Started guide exists" "test -f docs/GETTING_STARTED.md"
run_test "Migration guide exists" "test -f docs/MIGRATION_GUIDE.md"
run_test "CLAUDE.md exists" "test -f CLAUDE.md"
echo

echo "================================================================"
echo "📊 Test Summary"
echo "================================================================"
echo -e "Total tests: ${BLUE}$TESTS_TOTAL${NC}"
echo -e "Passed: ${GREEN}$TESTS_PASSED${NC}"
echo -e "Failed: ${RED}$TESTS_FAILED${NC}"

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "\n${GREEN}🎉 ALL TESTS PASSED! The Level AI Design System is ready for use.${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠️  Some tests failed. Please review the output above.${NC}"
    exit 1
fi