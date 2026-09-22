@echo off
setlocal

echo ========================================
echo Installing Project Dependencies
echo ========================================

call npm install dotenv @faker-js/faker luxon ajv csv-parse xlsx @axe-core/playwright allure-playwright mysql2

if errorlevel 1 (
echo.
echo ERROR: Dependency installation failed.
pause
exit /b 1
)

echo.
echo ========================================
echo Installing TypeScript Types
echo ========================================

call npm install -D @types/node

if errorlevel 1 (
echo.
echo ERROR: TypeScript types installation failed.
pause
exit /b 1
)

echo.
echo ========================================
echo Installing Playwright Browsers
echo ========================================

call npx playwright install

if errorlevel 1 (
echo.
echo ERROR: Playwright browser installation failed.
pause
exit /b 1
)

echo.
echo ========================================
echo ALL INSTALLATIONS COMPLETED
echo ========================================

echo.
echo NOTE: npm audit may report vulnerabilities
echo in third-party packages such as xlsx.
echo This does not necessarily mean installation failed.
echo.

pause
endlocal
