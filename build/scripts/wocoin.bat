@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  wocoin startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Add default JVM options here. You can also use JAVA_OPTS and WOCOIN_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windows variants

if not "%OS%" == "Windows_NT" goto win9xME_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set _SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%*

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\wocoin.jar;%APP_HOME%\lib\logback-classic-1.2.3.jar;%APP_HOME%\lib\text-io-3.3.0.jar;%APP_HOME%\lib\core-4.2.0.jar;%APP_HOME%\lib\crypto-4.2.0.jar;%APP_HOME%\lib\slf4j-api-1.7.26.jar;%APP_HOME%\lib\cucumber-runner-1.3.4.jar;%APP_HOME%\lib\sqlite-jdbc-3.27.2.1.jar;%APP_HOME%\lib\json-simple-1.1.1.jar;%APP_HOME%\lib\logback-core-1.2.3.jar;%APP_HOME%\lib\cucumber-report-generator-1.3.4.jar;%APP_HOME%\lib\maven-reporting-impl-2.0.4.3.jar;%APP_HOME%\lib\commons-validator-1.2.0.jar;%APP_HOME%\lib\commons-digester-1.6.jar;%APP_HOME%\lib\batik-transcoder-1.6-1.jar;%APP_HOME%\lib\itextpdf-5.5.12.jar;%APP_HOME%\lib\json-io-4.10.0.jar;%APP_HOME%\lib\cucumber-junit-1.2.5.jar;%APP_HOME%\lib\cucumber-testng-1.2.5.jar;%APP_HOME%\lib\doxia-site-renderer-1.0.jar;%APP_HOME%\lib\doxia-module-apt-1.0.jar;%APP_HOME%\lib\doxia-module-fml-1.0.jar;%APP_HOME%\lib\doxia-module-xdoc-1.0.jar;%APP_HOME%\lib\doxia-module-xhtml-1.0.jar;%APP_HOME%\lib\doxia-core-1.0.jar;%APP_HOME%\lib\maven-doxia-tools-1.0.2.jar;%APP_HOME%\lib\plexus-velocity-1.1.7.jar;%APP_HOME%\lib\maven-project-2.0.6.jar;%APP_HOME%\lib\maven-artifact-manager-2.0.6.jar;%APP_HOME%\lib\maven-settings-2.0.6.jar;%APP_HOME%\lib\maven-profile-2.0.6.jar;%APP_HOME%\lib\maven-plugin-registry-2.0.6.jar;%APP_HOME%\lib\plexus-container-default-1.0-alpha-30.jar;%APP_HOME%\lib\plexus-classworlds-1.2-alpha-9.jar;%APP_HOME%\lib\junit-4.12.jar;%APP_HOME%\lib\flying-saucer-pdf-9.1.7.jar;%APP_HOME%\lib\commons-lang3-3.6.jar;%APP_HOME%\lib\commons-codec-1.10.jar;%APP_HOME%\lib\javassist-3.22.0-CR2.jar;%APP_HOME%\lib\joda-time-2.9.9.jar;%APP_HOME%\lib\plexus-i18n-1.0-beta-7.jar;%APP_HOME%\lib\doxia-decoration-model-1.0.jar;%APP_HOME%\lib\maven-artifact-2.0.6.jar;%APP_HOME%\lib\maven-model-2.0.6.jar;%APP_HOME%\lib\maven-repository-metadata-2.0.6.jar;%APP_HOME%\lib\wagon-provider-api-1.0-beta-2.jar;%APP_HOME%\lib\plexus-utils-3.0.1.jar;%APP_HOME%\lib\maven-plugin-api-2.0.4.jar;%APP_HOME%\lib\maven-reporting-api-2.0.8.jar;%APP_HOME%\lib\jline-2.14.5.jar;%APP_HOME%\lib\awt-color-factory-1.0.0.jar;%APP_HOME%\lib\abi-4.2.0.jar;%APP_HOME%\lib\tuples-4.2.0.jar;%APP_HOME%\lib\jnr-unixsocket-0.21.jar;%APP_HOME%\lib\logging-interceptor-3.8.1.jar;%APP_HOME%\lib\okhttp-3.8.1.jar;%APP_HOME%\lib\rxjava-2.2.2.jar;%APP_HOME%\lib\Java-WebSocket-1.3.8.jar;%APP_HOME%\lib\jackson-databind-2.8.5.jar;%APP_HOME%\lib\freemarker-2.3.26-incubating.jar;%APP_HOME%\lib\batik-script-1.6-1.jar;%APP_HOME%\lib\batik-bridge-1.6-1.jar;%APP_HOME%\lib\cucumber-core-1.2.5.jar;%APP_HOME%\lib\testng-6.9.10.jar;%APP_HOME%\lib\hamcrest-core-1.3.jar;%APP_HOME%\lib\itext-2.1.7.jar;%APP_HOME%\lib\bctsp-jdk14-1.38.jar;%APP_HOME%\lib\flying-saucer-core-9.1.7.jar;%APP_HOME%\lib\doxia-sink-api-1.0.jar;%APP_HOME%\lib\rlp-4.2.0.jar;%APP_HOME%\lib\utils-4.2.0.jar;%APP_HOME%\lib\jnr-enxio-0.19.jar;%APP_HOME%\lib\jnr-posix-3.0.47.jar;%APP_HOME%\lib\jnr-ffi-2.1.9.jar;%APP_HOME%\lib\jnr-constants-0.9.11.jar;%APP_HOME%\lib\okio-1.13.0.jar;%APP_HOME%\lib\reactive-streams-1.0.2.jar;%APP_HOME%\lib\jackson-annotations-2.8.0.jar;%APP_HOME%\lib\jackson-core-2.8.5.jar;%APP_HOME%\lib\batik-gvt-1.6-1.jar;%APP_HOME%\lib\batik-svg-dom-1.6-1.jar;%APP_HOME%\lib\cucumber-html-0.2.3.jar;%APP_HOME%\lib\cucumber-jvm-deps-1.0.5.jar;%APP_HOME%\lib\gherkin-2.12.2.jar;%APP_HOME%\lib\bsh-2.0b4.jar;%APP_HOME%\lib\jcommander-1.48.jar;%APP_HOME%\lib\velocity-1.5.jar;%APP_HOME%\lib\commons-collections-3.2.jar;%APP_HOME%\lib\commons-beanutils-1.7.0.jar;%APP_HOME%\lib\commons-logging-1.0.4.jar;%APP_HOME%\lib\oro-2.0.8.jar;%APP_HOME%\lib\commons-io-1.4.jar;%APP_HOME%\lib\bcprov-jdk15on-1.60.jar;%APP_HOME%\lib\jffi-1.2.17.jar;%APP_HOME%\lib\jffi-1.2.17-native.jar;%APP_HOME%\lib\asm-commons-5.0.3.jar;%APP_HOME%\lib\asm-analysis-5.0.3.jar;%APP_HOME%\lib\asm-util-5.0.3.jar;%APP_HOME%\lib\asm-tree-5.0.3.jar;%APP_HOME%\lib\asm-5.0.3.jar;%APP_HOME%\lib\jnr-a64asm-1.0.0.jar;%APP_HOME%\lib\jnr-x86asm-1.0.2.jar;%APP_HOME%\lib\batik-parser-1.6-1.jar;%APP_HOME%\lib\batik-awt-util-1.6-1.jar;%APP_HOME%\lib\js-1.5R4.1.jar;%APP_HOME%\lib\batik-dom-1.6-1.jar;%APP_HOME%\lib\commons-lang-2.1.jar;%APP_HOME%\lib\batik-css-1.6-1.jar;%APP_HOME%\lib\batik-xml-1.6-1.jar;%APP_HOME%\lib\batik-util-1.6-1.jar;%APP_HOME%\lib\xercesImpl-2.5.0.jar;%APP_HOME%\lib\batik-gui-util-1.6-1.jar;%APP_HOME%\lib\batik-ext-1.6-1.jar;%APP_HOME%\lib\xmlParserAPIs-2.0.2.jar

@rem Execute wocoin
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %WOCOIN_OPTS%  -classpath "%CLASSPATH%" edu.wofford.wocoin.main.Main %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable WOCOIN_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%WOCOIN_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
