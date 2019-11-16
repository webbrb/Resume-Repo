cmake_minimum_required(VERSION 3.13)
project(NetworksProj3 C)

set(CMAKE_C_STANDARD 99)

add_executable(NetworksProj3 main.c rtp.h rtp.c events.c events.h )
