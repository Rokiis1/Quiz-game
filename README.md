# Table of contents

- [Overview](#overview)
- [Technologies](#technologies)
- [API Reference](#api-reference)
- [Run Locally](#run-locally)
- [Demo](#demo)

# Overview

Quiz game where you can guess 10 questions and deside if you win or lost I used [api](https://opentdb.com/api_config.php) for this application.

# Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

# API Reference

#### Get quiz questions

```http
  GET https://opentdb.com/${BASE_URL}/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `number` | **Required**. amount of questions |
| `difficulty` | `string`| **Required**. choose difficulty |

# Run Locally

Clone the project

```bash
  git clone git@github.com:Rokiis1/Quiz-game.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Demo

[Host Link on vercel](https://quiz-game-ten-pi.vercel.app/)

