@ECHO OFF
setlocal DISABLEDELAYEDEXPANSION
SET BIN_TARGET=%~dp0/../botman/installer/botman
php "%BIN_TARGET%" %*
