# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.13

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /cygdrive/c/Users/RB/.CLion2018.3/system/cygwin_cmake/bin/cmake.exe

# The command to remove a file.
RM = /cygdrive/c/Users/RB/.CLion2018.3/system/cygwin_cmake/bin/cmake.exe -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /cygdrive/c/Users/RB/CLionProjects/NetworksProj3

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/NetworksProj3.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/NetworksProj3.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/NetworksProj3.dir/flags.make

CMakeFiles/NetworksProj3.dir/main.c.o: CMakeFiles/NetworksProj3.dir/flags.make
CMakeFiles/NetworksProj3.dir/main.c.o: ../main.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building C object CMakeFiles/NetworksProj3.dir/main.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/NetworksProj3.dir/main.c.o   -c /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/main.c

CMakeFiles/NetworksProj3.dir/main.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/NetworksProj3.dir/main.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/main.c > CMakeFiles/NetworksProj3.dir/main.c.i

CMakeFiles/NetworksProj3.dir/main.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/NetworksProj3.dir/main.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/main.c -o CMakeFiles/NetworksProj3.dir/main.c.s

CMakeFiles/NetworksProj3.dir/rtp.c.o: CMakeFiles/NetworksProj3.dir/flags.make
CMakeFiles/NetworksProj3.dir/rtp.c.o: ../rtp.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object CMakeFiles/NetworksProj3.dir/rtp.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/NetworksProj3.dir/rtp.c.o   -c /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/rtp.c

CMakeFiles/NetworksProj3.dir/rtp.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/NetworksProj3.dir/rtp.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/rtp.c > CMakeFiles/NetworksProj3.dir/rtp.c.i

CMakeFiles/NetworksProj3.dir/rtp.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/NetworksProj3.dir/rtp.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/rtp.c -o CMakeFiles/NetworksProj3.dir/rtp.c.s

CMakeFiles/NetworksProj3.dir/events.c.o: CMakeFiles/NetworksProj3.dir/flags.make
CMakeFiles/NetworksProj3.dir/events.c.o: ../events.c
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building C object CMakeFiles/NetworksProj3.dir/events.c.o"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -o CMakeFiles/NetworksProj3.dir/events.c.o   -c /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/events.c

CMakeFiles/NetworksProj3.dir/events.c.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing C source to CMakeFiles/NetworksProj3.dir/events.c.i"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/events.c > CMakeFiles/NetworksProj3.dir/events.c.i

CMakeFiles/NetworksProj3.dir/events.c.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling C source to assembly CMakeFiles/NetworksProj3.dir/events.c.s"
	/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/events.c -o CMakeFiles/NetworksProj3.dir/events.c.s

# Object files for target NetworksProj3
NetworksProj3_OBJECTS = \
"CMakeFiles/NetworksProj3.dir/main.c.o" \
"CMakeFiles/NetworksProj3.dir/rtp.c.o" \
"CMakeFiles/NetworksProj3.dir/events.c.o"

# External object files for target NetworksProj3
NetworksProj3_EXTERNAL_OBJECTS =

NetworksProj3.exe: CMakeFiles/NetworksProj3.dir/main.c.o
NetworksProj3.exe: CMakeFiles/NetworksProj3.dir/rtp.c.o
NetworksProj3.exe: CMakeFiles/NetworksProj3.dir/events.c.o
NetworksProj3.exe: CMakeFiles/NetworksProj3.dir/build.make
NetworksProj3.exe: CMakeFiles/NetworksProj3.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Linking C executable NetworksProj3.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/NetworksProj3.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/NetworksProj3.dir/build: NetworksProj3.exe

.PHONY : CMakeFiles/NetworksProj3.dir/build

CMakeFiles/NetworksProj3.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/NetworksProj3.dir/cmake_clean.cmake
.PHONY : CMakeFiles/NetworksProj3.dir/clean

CMakeFiles/NetworksProj3.dir/depend:
	cd /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /cygdrive/c/Users/RB/CLionProjects/NetworksProj3 /cygdrive/c/Users/RB/CLionProjects/NetworksProj3 /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug /cygdrive/c/Users/RB/CLionProjects/NetworksProj3/cmake-build-debug/CMakeFiles/NetworksProj3.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/NetworksProj3.dir/depend

