import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getClientIpAddress() {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    const ipAddress = response.data.ip;
    return ipAddress;
  } catch (error: any) {
    console.error("Error fetching IP address:", error.message);
    return null;
  }
}

async function getLocationFromIp(ip: string) {
  try {
    const response = await axios.get(
      `https://ipinfo.io/${ip}?token=${process.env.NEXT_PUBLIC_IP_API_TOKEN}`
    );
    const location = response.data;
    return location;
  } catch (error: any) {
    console.error("Error fetching location:", error.message);
    return null;
  }
}

async function getSiteVisits() {
  try {
    const vistRes = await axios.get(`${BASE_URL}/site-visit.json`);
    const visits = vistRes.data;
    return visits;
  } catch (error: any) {
    console.log("Error in fetching visits", error.message);
    return null;
  }
}

async function saveSiteVisitImpression() {
  try {
    const ipAddress = await getClientIpAddress();
    if (!ipAddress) return console.log("No IP address found");

    const location = await getLocationFromIp(ipAddress);
    if (!location) return console.log("No location found");

    // check if user already visit website
    const visitsRes = await getSiteVisits();
    const visits = visitsRes ? Object.keys(visitsRes) : null;

    const visitId: any = visits?.find(
      (id: any) => visitsRes[id]?.ipAddress === ipAddress
    ); // returns visit id
    if (visitId) {
      const visit = visitsRes[visitId];
      // old visitor
      await axios.put(`${BASE_URL}/site-visit/${visitId}.json`, {
        ...visit,
        date: new Date().toISOString(),
        ipAddress,
        visitCount: visit.visitCount + 1,
      });
    } else {
      // new visitor
      await axios.post(`${BASE_URL}/site-visit.json`, {
        date: new Date().toISOString(),
        ipAddress,
        location,
        visitCount: 1,
      });
    }
  } catch (error: any) {
    console.log("Error in saving site visit impression", error.message);
  }
}

// save email
async function saveEmail(email: string) {
  try {
    await axios.post(`${BASE_URL}/email.json`, {
      email,
      date: new Date().toISOString(),
    });
  } catch (error: any) {
    console.log("Error in saving email", error.message);
  }
}

// save review
async function saveReview(data: {
  name: string;
  email: string;
  job: string;
  country: string;
  review: string;
  rating: number;
}) {
  try {
    await axios.post(`${BASE_URL}/reviews.json`, {
      ...data,
      date: new Date().toISOString(),
    });
  } catch (error: any) {
    console.log("Error in saving review", error.message);
  }
}

// get usd to inr
async function getUsdToInr() {
  try {
    // get response as text
    const res = await axios.get("/api/usd-inr");

    return res.data?.usdToInr;
  } catch (error: any) {
    return 80;
  }
}

// get country
async function getCountry() {
  const ipAddress = await getClientIpAddress();
  if (!ipAddress) return console.log("No IP address found");

  const location = await getLocationFromIp(ipAddress);
  if (!location) return console.log("No location found");

  return location?.country;
}

export {
  saveSiteVisitImpression,
  saveEmail,
  saveReview,
  getUsdToInr,
  getCountry,
};
