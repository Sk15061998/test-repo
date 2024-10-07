import React from "react";
import Logo from "../icons/MLogo";
import BannerIconOne from "../icons/BannerIconOne";
import BannerIconTwo from "../icons/BannerIconTwo";
import BannerIconThree from "../icons/BannerIconThree";
import BannerIconFour from "../icons/BannerIconFour";

const CloudBackupSection = () => {
  return (
    <section className="relative bg-gray-900 text-white pb-16">
      <div className="absolute top-[4.5rem] left-10 sm:left-40 md:left-60 lg:left-80 xl:left-[17rem]">
        <BannerIconOne />
      </div>
      <div className="absolute top-16 right-10 sm:right-40 md:right-60 lg:right-[20rem] xl:right-[29rem]">
        <BannerIconThree />
      </div>
      <div className="absolute top-[19rem] left-10 sm:left-40 md:left-60 lg:left-[18rem] xl:left-[18rem]">
        <BannerIconTwo />
      </div>
      <div className="absolute top-[15rem] right-10 sm:right-40 md:right-[12rem] lg:right-[17rem] xl:right-[17rem]">
        <BannerIconFour />
      </div>
      <div className="container mx-auto text-center">
        <div className="flex flex-col justify-center items-center space-y-4">
          <Logo width={180} height={180} />
          <h1 className="text-7xl font-bold">
            <span className="text-white">CloudBa</span>
            <span className="text-gray-200">sed</span>
            <span className="text-gray-300">Bac</span>
            <span className="text-gray-400">kup</span>
          </h1>
        </div>

        <h2 className="mt-4 text-lg">
          Official <span className="font-bold">MEGA</span> reseller
        </h2>

        <p
          className="mt-6 text-gray-400 max-w-2xl mx-auto"
          style={{ maxWidth: "37rem" }}
        >
          Secure your files with 1024-bit RSA encryption — you hold the only
          key.<span className="font-bold">No installation needed</span> — share
          directly through your browser, worldwide! At{" "}
          <span className="font-bold">MEGA</span>, privacy is standard because
          security should be for everyone.
        </p>
      </div>
      <div
        className="absolute inset-0 top-[16rem] text-center text-[155px] font-bold opacity-5"
        style={{
          color: "transparent",
          WebkitTextStroke: "3px white",
        }}
      >
        CloudBasedBackup
      </div>
    </section>
  );
};

export default CloudBackupSection;
