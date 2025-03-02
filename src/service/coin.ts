import api from "@/axios/config";

const getCoins = async (params = {}) => {
  try {
    const newUrlSearchParams = new URLSearchParams(params);
    const response = await api.get(
      `/coins/markets?${newUrlSearchParams.toString()}`
    );
    console.log("getCoins response", response);
    return response;
  } catch (error) {
    console.error("Error fetching coins:", error);
    throw error;
  }
};

const getCoinById = async (id: string) => {
  const response = await api.get(`/coins/${id}`);
  console.log("getCoinById response", response);
  return response;
};

const getHistoricalData = async (id: string) => {
  const response = await api.get(
    `/coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  console.log("getHistoricalData response", response);
  return response;
};

const getGlobalData = async () => {
  const response = await api.get(`/global`);
  console.log("getGlobalData response", response);
  return response.data;
};

const getCointChart = async (id: string, params = {}) => {
  const newUrlSearchParams = new URLSearchParams(params);
  const response = await api.get(
    `/coins/${id}/market_chart?${newUrlSearchParams.toString()}`
  );
  console.log("getCointChart response", response);
  return response;
};

export {
  getCoins,
  getCoinById,
  getHistoricalData,
  getGlobalData,
  getCointChart,
};
