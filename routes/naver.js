const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();


// 책 검색 API
router.get("/api/searchBook", async (req, res) => {
    const query = req.query.query;
    const api_url = `https://openapi.naver.com/v1/search/book.json?query=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(api_url, {
            headers: {
                "X-Naver-Client-Id": process.env.X_NAVER_CLIENT_ID,
                "X-Naver-Client-Secret": process.env.X_NAVER_CLIENT_SECRET,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data from Naver API:", error);
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

// 장소 검색 API
router.get("/api/searchPlace", async (req, res) => {
    const query = req.query.query;
    const api_url = `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}&display=10`;

    try {
        const response = await axios.get(api_url, {
            headers: {
                "X-Naver-Client-Id": process.env.X_NAVER_CLIENT_ID,
                "X-Naver-Client-Secret": process.env.X_NAVER_CLIENT_SECRET,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching data from Naver API:", error);
        res.status(500).json({ message: "Error fetching data", error: error.message });
    }
});

module.exports = router;