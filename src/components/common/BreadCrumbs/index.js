import React from "react";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import { routeMap } from "./routeMap";
import { BiChevronRight } from "@Icons";

import { Container } from "./styles";

const MINIMUM_VALUE_FOR_SHOW = 2;

const structuringList = (value) => value.split("/");

const includeBarStart = (segments) => {
  const links = segments.reduce((prevValue, value, index) => {
    const lastValueList = prevValue[index - 1];

    const last = index > 1 ? lastValueList : "";
    const newPath = last + "/" + value;

    return [...prevValue, newPath];
  }, []);
  return links;
};

const BreadCrumbs = ({ title, resumePage }) => {
  const router = useRouter();

  const [crumbs, setCrumbs] = React.useState([]);
  const [currentPageLink, setCurrentPageLink] = React.useState("");

  React.useEffect(() => {
    setCurrentPageLink(router.asPath);

    const listPath = structuringList(router.asPath);
    const listRoute = structuringList(router.route);
    const crumbLinks = includeBarStart(listPath);
    const crumbLabels = includeBarStart(listRoute);

    const crumbs = crumbLinks.map((link, index) => {
      const route = crumbLabels[index];
      const crumb = {
        link: link,
        route: route,
        label: routeMap[route] || route,
      };
      return crumb;
    });

    setCrumbs(crumbs);
  }, [router.asPath, router.route]);

  return (
    <Container aria-label="Breadcrumb">
      <h1>{title}</h1>
      <ol>
        {crumbs.length > MINIMUM_VALUE_FOR_SHOW ? (
          crumbs.map((crumb, key) => {
            if (crumb.link === currentPageLink) {
              return (
                <li key={key}>
                  <a href="#" aria-current="page">
                    <BiChevronRight size={18} />
                    {crumb.label}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={key}>
                  <a href={crumb.link}>{crumb.label}</a>
                </li>
              );
            }
          })
        ) : (
          <span>{resumePage}</span>
        )}
      </ol>
    </Container>
  );
};

BreadCrumbs.propTypes = {
  title: propTypes.string,
};

export default BreadCrumbs;
