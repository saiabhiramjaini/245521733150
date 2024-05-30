import { Request, Response } from "express";
import axios from "axios";

const getToken = async (req: Request, res: Response) => {
    try {
        const authResponse = await axios.post("http://20.244.56.144/test/auth", {
            companyName: "AffordMed",
            clientID: "64c139e5-a284-435d-88b2-5cf8f23e1b08",
            clientSecret: "wVeTQywDUZQNUxuG",
            ownerName: "JAINI SAI ABHIRAM",
            ownerEmail: "abhiramjaini28@gamil.com",
            rollNo: "245521733150"
        });
        const access_token = authResponse.data.access_token;

        const { companyname, categoryname } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        const productsResponse = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            params: {
                top,
                minPrice,
                maxPrice
            }
        });

        return res.json(productsResponse.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error");
    }
};

export default { getToken };
