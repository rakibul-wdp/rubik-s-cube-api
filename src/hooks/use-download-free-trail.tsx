"use client";

import { useState } from "react";

export const useDownloadFreeTrial = () => {
  const [downloadLink, setDownloadLink] = useState<string>();

  const getDLink = async () => {
    const apiUrl =
      "https://typeshort.com:9111/apis/version-checker/download-click";

    await fetch(apiUrl, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.respond === "success") {
          setDownloadLink(data.payload.full_download_link);
        }
      })
      .catch((error) => console.error(error));

    return downloadLink;
  };

  getDLink();

  return { getDLink };
};
