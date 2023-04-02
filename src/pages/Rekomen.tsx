import React, { useEffect, useState, memo } from "react";
import { RekomenKomik } from "../api/weebkomik";
import { Link } from "react-router-dom";

interface PopularData {
  title: string;
  thumb: string;
  endpoint: string;
}

const Recommend: React.FC = () => {
  const [popular, setPopular] = useState<PopularData[]>([]);

  useEffect(() => {
    RekomenKomik().then((res) => {
      setPopular(res);
    });
  }, []);

  const ListRekomenKomik = memo(() => {
    return (
      <>
        {popular.map((data, i) => {
          return (
            <div key={i}>
              <figure>
                <img src={data.thumb} alt={data.title} />
              </figure>
              <div>
                <Link to={`/detail/${data.endpoint}`}>
                  <h2>
                    {data.title}
                  </h2>
                </Link>
              </div>
            </div>
          );
        })}
      </>
    );
  });

  return (
    <main>
      <h2>
        Recommendation Komik
      </h2>
      {popular.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ListRekomenKomik />
        </div>
      )}
    </main>
  );
};

export default Recommend;
