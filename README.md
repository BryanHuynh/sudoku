# Sudoku Web browser with Solver

## Description

I decided to recreate the classic sudoku game using the react framework. The game uses an external api from https://sugoku.herokuapp.com/ to request a puzzle for the user using the axios package.

The solver uses a backtracking algorithm that will attempt to strategically brute force all the cells, constantly checking for values that follow sudoku rules, till a complete board is achieved

## Installation

The program can be opened by cloning the repo and running `npm install` in the terminal to install all node packages

## Run

using the terminal use `npm start`

The website will be hosted on http://localhost:3000

## Website

The website is deployed on netlify at: [https://bryan-huynh-sudoku.netlify.app](https://bryan-huynh-sudoku.netlify.app/)
