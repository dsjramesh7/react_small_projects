import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function FetchApIData(get_url) {
    try {
      setLoading(true);
      const response = await fetch(get_url);
      const gotData = await response.json();
      if (gotData && gotData.products && gotData.products.length > 0) {
        setData(gotData.products);
        setLoading(false);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    FetchApIData(url);
  }, [url]);

  return (
    <>
      <div>
        <h1>Custom Scroll Indicator</h1>
        <div className="data-container">
          {data && data.length > 0 ? (
            data.map((item, i) => <p key={i}>{item.title}</p>)
          ) : (
            <p>data not fetched</p>
          )}
        </div>
      </div>
    </>
  );
}
