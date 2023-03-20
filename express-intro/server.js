import express from 'express';
// const express = require('express');
const app = express();

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('express server listening on port 8080');
});
