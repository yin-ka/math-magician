import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayQuote() {
  const [myQuote, setMyQuote] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(true);
  const [quoteError, setQuoteError] = useState(null);
  return (
    <div>DisplayQuote</div>
  );
}

export default DisplayQuote;
