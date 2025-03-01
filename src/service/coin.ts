import api from "@/axios/config";

const getCoins = async (params = {}) => {
  try {
    const newUrlSearchParams = new URLSearchParams(params);
    const response = await api.get(
      `/coins/markets?${newUrlSearchParams.toString()}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching coins:", error);
    throw error;
  }
};

const getCoinById = async (id: string) => {
  const response = await api.get(`/coins/${id}`);
  return response.data;
};

const getHistoricalData = async (id: string) => {
  const response = await api.get(
    `/coins/${id}/market_chart?vs_currency=usd&days=7`
  );
  return response.data;
};

const getGlobalData = async () => {
  const response = await api.get(`/global`);
  return response.data;
};

export { getCoins, getCoinById, getHistoricalData, getGlobalData };
