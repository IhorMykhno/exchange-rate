import { memo } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { CurrentRate } from "./CurrentRate";
import { RateSubscription } from "./RateSubscription";
import { useEffect, useState } from "react";
import { Rate } from "../../services/api/rate";
import { Subscription } from "../../services/api/subscription";

const Dashboard = () => {
  const [rate, setRate] = useState(null);

  const handleSubscription = async (email) => {
    await Subscription.subscribeUser(email);
  };

  useEffect(() => {
    Rate.GetCurrentRate()
      .then(({ data }) => {
        setRate(data.rate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack width={1} alignItems={"center"} pt={20}>
      <Stack width={500} spacing={6}>
        <Box textAlign={"center"}>
          <Typography variant="h3">Exchange Rate</Typography>
        </Box>
        <Stack spacing={6}>
          <CurrentRate rate={rate} />
          <Divider sx={{ background: "black" }} />
          <RateSubscription onClick={handleSubscription} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default memo(Dashboard);
