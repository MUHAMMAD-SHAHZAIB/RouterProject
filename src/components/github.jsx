import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  console.log(data);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/MUHAMMAD-SHAHZAIB")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data?.followers}
      <p className="">Github Bio: {data?.bio}</p>
      <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/MUHAMMAD-SHAHZAIB"
  );
  return response.json();
};
