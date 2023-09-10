import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // get response as text
    const res = await axios.get(
      "https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=INR",
      {
        responseType: "text",
      }
    );

    const htmlText = res.data as string;
    const findIndex = htmlText.indexOf("result__BigRate-sc-1bsijpp-1 iGrAod");
    const usdToInr = htmlText.substring(findIndex + 37, findIndex + 42);

    return NextResponse.json({
      message: "success",
      usdToInr: parseFloat(usdToInr),
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "failed",
      usdToInr: 80,
    });
  }
}
