import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import Image from "next/image";

import styles from "./Map.module.css";

const icon = new Icon({
  iconUrl: "/mapPin.svg",
  iconSize: [23, 32],
});

const createImageUrl = (url, type) => {
  // type is a string and can be "thumbnail","small", "medium" or "large"
  const sections = url.split("/");
  sections[7] = type + "_" + sections[7];
  const newUrl = sections.join("/");
  return newUrl;
};

const Map = ({ services }) => {
  return (
    <MapContainer
      center={[52.3440392712677, 1.502143984]}
      // bounds={([52.61495, 1.697], [52.55872, 1.76277])}
      zoom={18}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ul className={styles.listWithoutBullets}>
        {services.map(
          ({
            id,
            name,
            lat,
            long,
            photo,
            description1,
            description2,
            addressLine1,
            addressLine2,
            addressLine3,
            postcode,
            phoneNumber,
            emailAddress,
            openingTimes,
          }) => (
            <li key={id}>
              <Marker position={[long, lat]} icon={icon}>
                <Popup>
                  <div className={styles.popupHeader}>
                    <h2 className={styles.popupTitle}>{name}</h2>
                  </div>
                  <div key={id} className={styles.popupContent}>
                    {photo && (
                      <>
                        <Image
                          className={styles.imageWrapper}
                          src={createImageUrl(photo.url, "medium")}
                          blurDataURL={createImageUrl(photo.url, "thumbnail")}
                          placeholder="blur"
                          alt={`photo of ${name}`}
                          layout="raw"
                          width="100%"
                          height="100%"
                          sizes
                        />
                        <div className={styles.verticalSpacing} />
                      </>
                    )}
                    {description1 && (
                      <p className={styles.serviceInformation}>
                        {description1}
                      </p>
                    )}
                    <div className={styles.verticalSpacing} />
                    {description2 && (
                      <p className={styles.serviceInformation}>
                        {description2}
                      </p>
                    )}
                    <div className={styles.verticalSpacing} />

                    {addressLine1 && (
                      <p className={styles.address}>{addressLine1}</p>
                    )}
                    {addressLine2 && (
                      <p className={styles.address}>{addressLine2}</p>
                    )}
                    {addressLine3 && (
                      <p className={styles.address}>{addressLine3}</p>
                    )}
                    {postcode && <p className={styles.address}>{postcode}</p>}
                    <div className={styles.verticalSpacing} />

                    {phoneNumber && (
                      <>
                        <a href={`tel:${phoneNumber}`}>
                          <p className={styles.serviceInformation}>
                            {phoneNumber}
                          </p>
                        </a>
                        <div className={styles.verticalSpacing} />
                      </>
                    )}

                    {openingTimes && (
                      <>
                        <p className={styles.serviceInformation}>
                          {openingTimes}
                        </p>
                        <div className={styles.verticalSpacing} />
                      </>
                    )}

                    {emailAddress && (
                      <>
                        <a
                          href={`mailto:${emailAddress}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className={styles.serviceInformation}>
                            {emailAddress}
                          </p>
                        </a>
                        <div className={styles.verticalSpacing} />
                      </>
                    )}
                  </div>
                </Popup>
              </Marker>
            </li>
          )
        )}
      </ul>
    </MapContainer>
  );
};

export default Map;
