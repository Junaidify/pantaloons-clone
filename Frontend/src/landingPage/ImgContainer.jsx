import {} from "react";

export const ImgContainer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5vh auto",
          width: "80%",
          columnGap: "2vw",
        }}
      >
        <p>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2024-2025/june/1eoss/tnc/20240626_EOSS_homepage banners_offer_DSUB.jpg.transform/i671x305/image.jpeg"
            alt=""
          />
        </p>
        <p>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src="https://publish-p33712-e119997.adobeaemcloud.com/content/dam/adityabirlafashionandretailprogram/homepage/fy-2023-2024/mar2024/week-5/sub-banner/202403-Kurtas-D.jpg.transform/i671x305/image.jpeg"
            alt=""
          />
        </p>
      </div>
    </>
  );
};
