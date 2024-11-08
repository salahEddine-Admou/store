"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("fr-MA", {
  style: "currency",
  currency: "MAD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold text-primary">
      {formatter.format(Number(value))}
    </div>
  );
};

export default Currency;
