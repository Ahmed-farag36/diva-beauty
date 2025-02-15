import { useEffect } from "react";
import React from "react";
import createClass from "create-react-class";
import Head from "next/head";

// Netlify Identity Widget importieren
import netlifyIdentity from "netlify-identity-widget";

const CMSPage = () => {
  useEffect(() => {
    // Netlify Identity Widget initialisieren
    netlifyIdentity.init();

    // Automatisches Öffnen des Login-Popups, wenn ein Invite Token vorhanden ist
    if (window.location.hash.includes("invite_token")) {
      netlifyIdentity.open("signup");
    }

    (async () => {
      const CMS = (await import("decap-cms-app")).default;
      CMS.init();

      const GeneratePreview = (type) =>
        createClass({
          render: function () {
            const { entry } = this.props;
            const data = { type };

            const entryData = entry.get("data").toJS();
            Object.keys(entryData).forEach((key) => {
              try {
                const value = entryData[key];
                data[key] = value === "undefined" ? "" : value;
              } catch (e) {
                console.error(`Error extracting key ${key}:`, e);
              }
            });

            try {
              data.mediaFiles = entry.get("mediaFiles");
            } catch (e) {
              console.error("Error extracting media files:", e);
            }

            const host = window.location.host;
            const isLocal = ["localhost", "127.0.0.1"].includes(
              host.split(":")[0]
            );
            const src = `${isLocal ? "http" : "https"}://${host}/preview`;
            window.previewDataCMS = data;

            const html = `<iframe src="${src}" width="100%" height="100%" style="border: 1px solid #EEE; height: calc(100vh - 80px)"></iframe>`;
            return React.createElement("div", {
              dangerouslySetInnerHTML: { __html: html },
            });
          },
        });

      CMS.registerPreviewTemplate("startseite", GeneratePreview("startseite"));
      CMS.registerPreviewTemplate("about", GeneratePreview("about"));
      CMS.registerPreviewTemplate("pricing", GeneratePreview("pricing"));
      CMS.registerPreviewTemplate("akademie", GeneratePreview("akademie"));
      CMS.registerPreviewTemplate(
        "behandlungen",
        GeneratePreview("behandlungen")
      );

      CMS.registerPreviewTemplate("gallery", GeneratePreview("gallery"));
      CMS.registerPreviewTemplate(
        "academy-courses",
        GeneratePreview("academy-courses")
      );

      CMS.registerPreviewTemplate("services", GeneratePreview("services"));
    })();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </Head>
      <main id="cms" />
    </>
  );
};

export default CMSPage;
