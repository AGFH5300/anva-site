import { useEffect, useRef } from "react";
import "../styles/anva.css";

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nav = container.querySelector(
      '[data-shared-component="primary-navigation"]'
    );
    const btn = nav?.querySelector(
      '[data-ref="mobile-menu-btn"]'
    ) as HTMLElement | null;
    const menu = nav?.querySelector(
      '[data-ref="mobile-menu"]'
    ) as HTMLElement | null;

    const handleMenuToggle = () => {
      if (!menu) return;
      const isHidden = getComputedStyle(menu).display === "none";
      menu.style.display = isHidden ? "block" : "none";
    };

    if (btn) {
      btn.addEventListener("click", handleMenuToggle);
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealTargets = container.querySelectorAll("section > div");
    revealTargets.forEach((el) => {
      const target = el as HTMLElement;
      target.style.opacity = "0";
      target.style.transform = "translateY(30px)";
      target.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      observer.observe(target);
    });

    const handleScroll = () => {
      const hero = container.querySelector("#hero");
      if (!hero) return;

      const bg = hero.querySelector("img") as HTMLElement | null;
      if (!bg) return;

      const scrolled = window.pageYOffset;
      if (scrolled < (hero as HTMLElement).offsetHeight) {
        bg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleMenuToggle);
      }
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <span className="badge-positioner">
        <a href="https://loki.build" target="_blank" className="badge">
          <span className="badge-text">
            Made with love in
          </span>
          <svg width="32" height="26" viewBox="0 0 85 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="35" cy="13" r="13" fill="#00FF22">
            </circle>
            <path d="M0 2.82843C0 1.04662 2.15428 0.154284 3.41421 1.41421L23.5858 21.5858C24.8457 22.8457 23.9534 25 22.1716 25H2C0.895431 25 0 24.1046 0 23V2.82843Z" fill="#00FF22">
            </path>
            <path d="M49 3C49 1.89543 49.8954 1 51 1H68.4535C70.1937 1 71.1037 3.06865 69.9278 4.35145L62.6194 12.3243C62.269 12.7066 62.269 13.2934 62.6194 13.6757L69.9278 21.6485C71.1037 22.9314 70.1937 25 68.4535 25H51C49.8954 25 49 24.1046 49 23V3Z" fill="#00FF22">
            </path>
            <path d="M72 3C72 1.89543 72.8954 1 74 1H83C84.1046 1 85 1.89543 85 3V23C85 24.1046 84.1046 25 83 25H74C72.8954 25 72 24.1046 72 23V3Z" fill="#00FF22">
            </path>
          </svg>
        </a>
      </span>
      <nav data-loki-id="gmyxkPFhSakx" className="" data-shared-component="primary-navigation">
        <div data-loki-id="JiWOfPBWaCWm" className="">
          <div data-loki-id="eJwWIABxuAxw" className="">
            <span data-loki-id="jQYXkwrxjwtX" className="">
              <span data-loki-id="BbsosjmLEBLC">
                ANVA
              </span>
            </span>
          </div>
          <div data-loki-id="pipWZEBYfTCy" className="">
            <a data-loki-id="CXdDrucOJkEv" href="#services">
              Services
            </a>
            <a data-loki-id="eTnlTWSQuWSL" href="#brands">
              Brands
            </a>
            <a data-loki-id="nTZRDbcQFzLD" href="#about">
              About
            </a>
            <a data-loki-id="bZSXFJRMUxfp" href="#contact">
              Contact
            </a>
          </div>
          <div data-loki-id="VeelMFZSuzvJ" className="">
            <a data-loki-id="vhDLiXdGQysI" className="" href="#rfq">
              <span data-loki-id="gLPzXAqECaix">
                Request Quote
              </span>
              <svg data-loki-id="oayjLCHsRVqI" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14">
                </path>
                <path d="m12 5 7 7-7 7">
                </path>
              </svg>
            </a>
            <button data-loki-id="UoJLhTfkQGbz" className="" data-ref="mobile-menu-btn">
              <svg data-loki-id="CqqCVwvnShkm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16">
                </path>
                <path d="M4 12h16">
                </path>
                <path d="M4 19h16">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div data-loki-id="oTTDuwXjUfdw" className="" data-ref="mobile-menu">
          <div data-loki-id="npQqhWgbIdgw" className="">
            <a data-loki-id="SeBbHpOwptqN" href="#services">
              Services
            </a>
            <a data-loki-id="ZaNRdhazVrFc" href="#brands">
              Brands
            </a>
            <a data-loki-id="lMzPyPeHOFOr" href="#about">
              About
            </a>
            <a data-loki-id="gyVctdlfbCCP" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section data-loki-id="LuDBwaQCmXGI" className="" id="hero">
        <div data-loki-id="lVeqciuQlLSu" className="">
          <img data-loki-id="tZfOQetPxiQm" src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
          <div data-loki-id="HOeCVNIQZkPc" className="">
          </div>
        </div>
        <div data-loki-id="WMhUVXpUpceK" className="">
          <div data-loki-id="eLmGrolwkACF" className="">
            <div data-loki-id="UVsgnwrzHUHo" className="">
              <span data-loki-id="wwLEsFQfXgfk" className="">
              </span>
              <span data-loki-id="NPittQTBCdHT">
                OPERATIONAL 24/7
              </span>
            </div>
            <h1 data-loki-id="mqdEygJPDeyt">
              Where Marine
      Meets Mastery
            </h1>
            <p data-loki-id="wkfSlNpBtfdA">
              ANVA Marine delivers end-to-end solutions that keep fleets moving. From complex punch list closures to global OEM sourcing and offshore chartering, we are the maritime backbone of the UAE.
            </p>
            <div data-loki-id="EIvfpsqgfWaw" className="">
              <a data-loki-id="RXXEfwxcRopn" className="" href="#rfq">
                <span data-loki-id="MgUHaPNcUnSR">
                  Request a Quote
                </span>
                <svg data-loki-id="hNWReggsCcAT" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6">
                  </path>
                </svg>
              </a>
              <a data-loki-id="NceAuDGndkoD" href="#services">
                View Services
              </a>
            </div>
          </div>
          <div data-loki-id="useNaRTHMmtp" className="">
            <div data-loki-id="vVVVuLyRxFtE" className="">
              <div data-loki-id="sIKPfjZCpmrs">
                50+
              </div>
              <div data-loki-id="fNZJFWqQXgDs">
                Years Expertise
              </div>
            </div>
            <div data-loki-id="cSTNbbFBRTDP" className="">
              <div data-loki-id="UqsaFZdcXZMx">
                24/7
              </div>
              <div data-loki-id="mlXKaTpxAMPu">
                Reliability
              </div>
            </div>
            <div data-loki-id="wwLiuVDgfvZM" className="">
              <div data-loki-id="ZhuRoPvtnmOO">
                UAE
              </div>
              <div data-loki-id="umwlrNyXhiYx">
                Port Coverage
              </div>
            </div>
            <div data-loki-id="nJlnzCTMvGvG" className="">
              <div data-loki-id="mkHtrxfayokB">
                100%
              </div>
              <div data-loki-id="fyrRykzFAJQO">
                Compliance
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="zbUDJmXdYFKm" className="" id="about">
        <div data-loki-id="pqJTWvCzThtX" className="">
          <div data-loki-id="grzDnyaJCwjC" className="">
            <div data-loki-id="RMxOnisFcIpf" className="">
              <h2 data-loki-id="gNqJzggVtxPe">
                50 Years of Nautical Excellence
              </h2>
              <p data-loki-id="FNyIBqUOGhPF">
                Advanced Nautical Ventures (ANVA Marine) is a UAE-based powerhouse in marine services. We don&#x27;t just fix ships; we engineer reliability. Our strategic goal is to be recognized as the global leader in marine services, bridging the gap between intricate engineering problems and seamless operational solutions.
              </p>
              <div data-loki-id="DPsCAykNYIAy" className="">
                <div data-loki-id="VOHjJTvMClNw" className="">
                  <h3 data-loki-id="xaHUKWvFfTwp">
                    Quality &amp; Reliability
                  </h3>
                  <p data-loki-id="JlUZgDdHgeeS">
                    Uncompromising standards in every spare part and service hour.
                  </p>
                </div>
                <div data-loki-id="CUqKPPddReRa" className="">
                  <h3 data-loki-id="ZoPavSmtZvqf">
                    Innovation
                  </h3>
                  <p data-loki-id="UpvOMyZLgdcJ">
                    Leveraging latest diagnostics and propulsion tech.
                  </p>
                </div>
                <div data-loki-id="SDiBYgbWnWho" className="">
                  <h3 data-loki-id="nUTirpRtqacm">
                    Safety First
                  </h3>
                  <p data-loki-id="pkzuNgMGdxcz">
                    ISO 45001:2018 driven safety protocols.
                  </p>
                </div>
                <div data-loki-id="ZDYuyCxSKVBj" className="">
                  <h3 data-loki-id="rAEaNLAkQwIX">
                    Sustainability
                  </h3>
                  <p data-loki-id="VHOZZnDpfVEc">
                    Eco-friendly cleaning and fuel-saving solutions.
                  </p>
                </div>
              </div>
            </div>
            <div data-loki-id="fQrUCNEXLlsG" className="">
              <div data-loki-id="HSYODDIWcecO" className="">
              </div>
              <img data-loki-id="eTvtPyzSVhhG" src="https://images.unsplash.com/photo-1566835266472-351119b4b45d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
              <div data-loki-id="YbTtuZOftTYw" className="">
                <div data-loki-id="faHTfqmXSkRw" className="">
                  <svg data-loki-id="wslJquyFikEY" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3">
                    </circle>
                  </svg>
                  <span data-loki-id="yoPOPePdUCoV">
                    Dubai Maritime City
                  </span>
                </div>
                <p data-loki-id="cobypArZKHqH">
                  Strategic Hub for UAE &amp; Global Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="gDsjRDiQLUTm" className="" id="brands">
        <div data-loki-id="VCaEMbNweETE" className="">
          <div data-loki-id="JfzKuwpEVUpV" className="">
            <h2 data-loki-id="wgJBEFfLVwYL">
              Authorized Representation
            </h2>
            <p data-loki-id="PGWOsdSKoJPg">
              ANVA Marine proudly represents and supports leading global OEMs, bringing factory-level precision to local waters.
            </p>
          </div>
          <div data-loki-id="rUTAmKTEZtHq" className="">
            <div data-loki-id="xdEjSrULcaTF" className="">
              <span data-loki-id="lhVrqRDRGMRR">
                MARIDIS
              </span>
              <span data-loki-id="bPAjLvIxGqOY">
                Engine Diagnostics
              </span>
            </div>
            <div data-loki-id="wyFlcLswBYdW" className="">
              <span data-loki-id="ScYydokhVUGO">
                Rexroth
              </span>
              <span data-loki-id="LiHRbgooLzNt">
                Bosch Hydraulics
              </span>
            </div>
            <div data-loki-id="SoMTSlLqgcYV" className="">
              <span data-loki-id="WcfqIbiMpFQK">
                HYDAC
              </span>
              <span data-loki-id="VuXEqapfgJuo">
                Fluid Control
              </span>
            </div>
            <div data-loki-id="dKGacLwGLDYW" className="">
              <span data-loki-id="JsgjYgYWAAez">
                Kockums
              </span>
              <span data-loki-id="vqeUpIvWRXIg">
                Signaling Systems
              </span>
            </div>
            <div data-loki-id="gQEQonhEGTPK" className="">
              <span data-loki-id="TaksZNjUussJ">
                Loadmaster
              </span>
              <span data-loki-id="qdecEdqpmwHX">
                Tank Gauging
              </span>
            </div>
            <div data-loki-id="kGXkscpXrsPG" className="">
              <span data-loki-id="FVuuGjTwCbHf">
                Polarjet
              </span>
              <span data-loki-id="cdhcePEEQgTn">
                Tank Cleaning
              </span>
            </div>
            <div data-loki-id="cSKkUpBsGDDg" className="">
              <span data-loki-id="tleNhjWNaEho">
                Subhadra
              </span>
              <span data-loki-id="whCEeGqEnCxG">
                Propulsion
              </span>
            </div>
            <div data-loki-id="zyRPzZaSyhSy" className="">
              <span data-loki-id="ljAvZHzgcbYf">
                ICCP/MGPS
              </span>
              <span data-loki-id="kthvsrhZBgFy">
                Cathodic Protection
              </span>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="LsHYhUUxaorL" className="">
        <div data-loki-id="gfAJhwJiIiqR" className="">
          <div data-loki-id="RxbmKiTTeetS" className="">
            <div data-loki-id="ctyZfrFUZXCi" className="">
              <h2 data-loki-id="CWvgxCUAXxPs">
                Certified Quality &amp; Compliance
              </h2>
              <p data-loki-id="jPQLbkwEerJx">
                Quality is not a department; it&#x27;s our doctrine. ANVA Marine adheres to the strictest international standards, ensuring that every project meets IMO/SOLAS regulations and exceeds client expectations. We are committed to operational safety and environmental stewardship.
              </p>
              <div data-loki-id="OmbetwJcfUBA" className="">
                <div data-loki-id="trzUDvBltpAj" className="">
                  <svg data-loki-id="pMEJHgBeJyKa" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10">
                    </circle>
                    <path d="m9 12 2 2 4-4">
                    </path>
                  </svg>
                  <span data-loki-id="xOItxOWzBShB">
                    ISO 9001:2015
                  </span>
                </div>
                <div data-loki-id="VEmPmXcFwCcO" className="">
                  <svg data-loki-id="xnvyozASlzgF" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10">
                    </circle>
                    <path d="m9 12 2 2 4-4">
                    </path>
                  </svg>
                  <span data-loki-id="HfquQiCdnnCg">
                    ISO 14001:2015
                  </span>
                </div>
                <div data-loki-id="EQPfTjVEsMaU" className="">
                  <svg data-loki-id="jNlQdKGiiATE" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10">
                    </circle>
                    <path d="m9 12 2 2 4-4">
                    </path>
                  </svg>
                  <span data-loki-id="foJZBMYTrcNE">
                    ISO 45001:2018
                  </span>
                </div>
              </div>
            </div>
            <div data-loki-id="VVrHdHeJkyMi" className="">
              <div data-loki-id="BCaBIcqPdpQR" className="">
                <div data-loki-id="iCJBFFxqTalu" className="">
                  <svg data-loki-id="UdleaKStzHWi" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
                    </path>
                    <circle cx="12" cy="8" r="6">
                    </circle>
                  </svg>
                </div>
                <div data-loki-id="ETXhbKFIoGFK" className="">
                </div>
                <div data-loki-id="HHBwQDgmhgvk" className="">
                </div>
              </div>
              <div data-loki-id="snsEJgUlAdGw" className="">
                <div data-loki-id="cMzYNxrVvuxq" className="">
                  <svg data-loki-id="txlNHBQecwop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                    </path>
                    <path d="m9 12 2 2 4-4">
                    </path>
                  </svg>
                </div>
                <div data-loki-id="LpipZVRxEbAL" className="">
                </div>
                <div data-loki-id="SHidaOvjYOsX" className="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="nmdEwJiyQyVM" className="" id="rfq">
        <div data-loki-id="aVUkUmEdVMap" className="">
          <div data-loki-id="zvOQyGYtaANu" className="">
            <div data-loki-id="RvKewjNVnTdl" className="">
              <h2 data-loki-id="iEeagPRhIbZM">
                Request a Quotation
              </h2>
              <p data-loki-id="qYLUdPLwLlXg">
                Direct gateway for clients and suppliers. We guarantee a response within one business day.
              </p>
              <div data-loki-id="QPITWqDpQbnU" className="">
                <div data-loki-id="AuNxMljUYuwu" className="">
                  <div data-loki-id="maFbHWBLuHKQ" className="">
                    <svg data-loki-id="pNCWpscJNTDP" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                      </path>
                      <circle cx="12" cy="10" r="3">
                      </circle>
                    </svg>
                  </div>
                  <div data-loki-id="QmNqBegjmmIH" className="">
                    <h4 data-loki-id="bPsEsOJdIpvN">
                      Dubai Maritime City
                    </h4>
                    <p data-loki-id="CmgDIfamkVpp">
                      Warehouse 44, Industrial Precinct, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div data-loki-id="RhezcLzdouqq" className="">
                  <div data-loki-id="keyTPzXLKbMo" className="">
                    <svg data-loki-id="ecDqHZcnAZQw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                      </path>
                    </svg>
                  </div>
                  <div data-loki-id="RsuwDufMqnDv" className="">
                    <h4 data-loki-id="GQZSARbXSrzC">
                      24/7 Support
                    </h4>
                    <p data-loki-id="BHWDSkJACNlx">
                      +971 4 000 0000
                    </p>
                  </div>
                </div>
                <div data-loki-id="MuNFbpKBnhKg" className="">
                  <div data-loki-id="aHgRLfrzYzdq" className="">
                    <svg data-loki-id="fCJLQOvlmzBL" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z">
                      </path>
                    </svg>
                  </div>
                  <div data-loki-id="MZmLdPsMfbqU" className="">
                    <h4 data-loki-id="dnwfMjmNFeiN">
                      WhatsApp Priority
                    </h4>
                    <a data-loki-id="tPSxEZXKPKsH" href="#">
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form data-loki-id="nhZMnGtZjjWp" className="">
              <div data-loki-id="isWKWciGwTew" className="">
                <div data-loki-id="MLYUPPmWjecG" className="">
                  <label data-loki-id="gjzqEuFjrLHy">
                    Name
                  </label>
                  <input data-loki-id="grjKHxFkaHLN" type="text"/>
                </div>
                <div data-loki-id="LVpANfUkazCi" className="">
                  <label data-loki-id="nvUGjdPTWCMc">
                    Company
                  </label>
                  <input data-loki-id="IgdUJnHJsxOK" type="text"/>
                </div>
              </div>
              <div data-loki-id="ZwXrxVbWJvBU" className="">
                <div data-loki-id="averKfXnJuJN" className="">
                  <label data-loki-id="mwwOAEXHOLqZ">
                    Email
                  </label>
                  <input data-loki-id="zhHdvZKqGlzb" type="email"/>
                </div>
                <div data-loki-id="DQdueATdoVZz" className="">
                  <label data-loki-id="dHSYEZYCNMJE">
                    Phone
                  </label>
                  <input data-loki-id="kwrjwShOjMUD" type="tel"/>
                </div>
              </div>
              <div data-loki-id="KCYllySAmNUL" className="">
                <div data-loki-id="rucBaoNaGyoc" className="">
                  <label data-loki-id="COgHSuncnXfx">
                    Vessel Name
                  </label>
                  <input data-loki-id="wlbtEXRZIZUm" type="text"/>
                </div>
                <div data-loki-id="ZcUqjlNQIGXm" className="">
                  <label data-loki-id="PCPNVPsbsMNm">
                    Port/Location
                  </label>
                  <input data-loki-id="KHnPOvfgkVBe" type="text"/>
                </div>
              </div>
              <div data-loki-id="QkamSupqSPdw" className="">
                <label data-loki-id="sensoJwywNQR">
                  Message / Scope
                </label>
                <textarea data-loki-id="kFuQkgljaFrE" rows="4">
                </textarea>
              </div>
              <button data-loki-id="mZeoixiEdlst" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <section data-loki-id="gZIAADWmTQIH" className="">
        <div data-loki-id="YKsPfVfFWADb" className="">
          <div data-loki-id="ElFoPEYJljFy" className="">
            <svg data-loki-id="slqArPJUcMCT" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1">
              </circle>
              <circle cx="19" cy="21" r="1">
              </circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
              </path>
            </svg>
            <h3 data-loki-id="HoIRNZEcFgco">
              eCommerce Store Coming Soon
            </h3>
            <p data-loki-id="QekuPEBOkUPO">
              Direct purchase of Hydraulics, Filters, Valves, and Sensors. Search by part number with live stock integration.
            </p>
            <span data-loki-id="YpCIxulaoyPW">
              Under Development
            </span>
          </div>
        </div>
      </section>
      <section data-loki-id="NVgJDBqDOpYZ" className="" id="services">
        <div data-loki-id="AXDLDSnezsiq" className="">
          <div data-loki-id="BoiEMNyQZaaM" className="">
            <h2 data-loki-id="eoqCRpbltwsN">
              Our Solutions
            </h2>
            <div data-loki-id="iILcaUQOdBPB" className="">
            </div>
            <p data-loki-id="ImNTEwbHCrve">
              Explore our comprehensive portfolio of specialized marine services. From engine diagnostics to hydraulic motion control, we bring world-class engineering to the UAE maritime sector.
            </p>
          </div>
        </div>
      </section>
      <section data-loki-id="KollGEIQYURt" className="">
        <div data-loki-id="zwEKvhzzDcGO" className="">
          <div data-loki-id="vERShxDcVqCK" className="">
            <div data-loki-id="gzbkDjLLjARH" className="">
              <div data-loki-id="XKBZxNYhOysQ" className="">
                <svg data-loki-id="iRDyCPuCNYag" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
                  </path>
                </svg>
                <span data-loki-id="piadMyyOKywy">
                  Engine Performance
                </span>
              </div>
              <h3 data-loki-id="cngZgexoJjux">
                MARIDIS GmbH
              </h3>
              <p data-loki-id="ktAYnyGcLPYR">
                As the authorized UAE representative, ANVA Marine delivers peak engine efficiency through MARIDIS diagnostics. We specialize in combustion analysis and cylinder pressure monitoring to optimize fuel consumption and prevent failure.
              </p>
              <ul data-loki-id="oZZsHLzQVrMs" className="">
                <li data-loki-id="DEEYBiSLUjRL" className="">
                  <span data-loki-id="NjFGXWyHQBxG" className="">
                  </span>
                  <span data-loki-id="gFDhmpNjHEuv">
                    MarIDAn Online Diagnostics
                  </span>
                </li>
                <li data-loki-id="DbsCiGVSJfCs" className="">
                  <span data-loki-id="CXCOobIZFKcO" className="">
                  </span>
                  <span data-loki-id="gEkcKRgrUvDL">
                    PPA-01 Peak Pressure Gauges
                  </span>
                </li>
                <li data-loki-id="kAiAZXzSvvAD" className="">
                  <span data-loki-id="jjWfefHGhcYT" className="">
                  </span>
                  <span data-loki-id="PQZyMGrFSvGm">
                    LDM-02 Cylinder Pressure Monitoring
                  </span>
                </li>
              </ul>
              <a data-loki-id="gQBgDkdeOMAp" href="#rfq">
                Enquire about MARIDIS
              </a>
            </div>
            <div data-loki-id="FoOuCtkjfWyh" className="">
              <span data-loki-id="DyGUaggKLErT">
                Authorized Rep
              </span>
              <svg data-loki-id="yzNJorMYtuXU" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 14 4-4">
                </path>
                <path d="M3.34 19a10 10 0 1 1 17.32 0">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="fRuGLjfAmRci" className="">
        <div data-loki-id="waTaBYgyiFZl" className="">
          <div data-loki-id="QdHUzZfpivYJ" className="">
            <div data-loki-id="OcEUXYlAuOYn" className="">
              <svg data-loki-id="zibLYLYyXqTm" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915">
                </path>
                <circle cx="12" cy="12" r="3">
                </circle>
              </svg>
            </div>
            <div data-loki-id="bsPRjhlGikSW" className="">
              <div data-loki-id="TMRTMoLqnamR" className="">
                <svg data-loki-id="rRxtoYkgpMTW" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                  </path>
                </svg>
                <span data-loki-id="RYsOUgUizSqf">
                  Hydraulic Power
                </span>
              </div>
              <h3 data-loki-id="UeHoXrhdOkuY">
                Bosch Rexroth
              </h3>
              <p data-loki-id="ZwLaWpVyWudP">
                Powering the heaviest marine lifting and steering applications. ANVA provides complete Bosch Rexroth solutions for winches, cranes, and thrusters, ensuring precise motion control under extreme loads.
              </p>
              <div data-loki-id="JkyFOLRTOumZ" className="">
                <div data-loki-id="eHtCMjetYCfa" className="">
                  <span data-loki-id="eiyBTjninhAU">
                    A10VSO / A4VSO
                  </span>
                  <span data-loki-id="YPcbNLDYzlOv">
                    Axial Piston Pumps
                  </span>
                </div>
                <div data-loki-id="IymSFHoQXEAf" className="">
                  <span data-loki-id="ZxZvKbFuYtgI">
                    4WE6 / M4C
                  </span>
                  <span data-loki-id="TQqzQdNULyCf">
                    Directional Valves
                  </span>
                </div>
              </div>
              <a data-loki-id="FVNELOdugAoa" href="#rfq">
                Enquire about Rexroth
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="eQCxAGloxTHL" className="">
        <div data-loki-id="UJRgLvYAAFfH" className="">
          <div data-loki-id="DdBmIxNywqIv" className="">
            <div data-loki-id="zWkrVYrfqGvV" className="">
              <div data-loki-id="idqoQmJivMDt" className="">
                <svg data-loki-id="MmefMYgqXqfN" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z">
                  </path>
                </svg>
                <span data-loki-id="ORhgbfAbvISA">
                  Filtration Tech
                </span>
              </div>
              <h3 data-loki-id="HJjxMXOCChfP">
                HYDAC Technology
              </h3>
              <p data-loki-id="QIZXXIsfsXMF">
                Fluid conditioning is critical for system longevity. We supply original HYDAC elements, housings, and sensors to protect your hydraulic power packs and lube oil systems from contamination.
              </p>
              <ul data-loki-id="dNfZvJjvVwhO" className="">
                <li data-loki-id="cYCFzHZxGidT" className="">
                  <span data-loki-id="OwKbQhuSfIhW" className="">
                  </span>
                  <span data-loki-id="KlqsqEOBqKan">
                    0240D / 0330D Pressure Filters
                  </span>
                </li>
                <li data-loki-id="HzGovTApxwOQ" className="">
                  <span data-loki-id="birKvFRfRHXI" className="">
                  </span>
                  <span data-loki-id="zvIJlFFkzjQG">
                    Aquamicron Elements
                  </span>
                </li>
                <li data-loki-id="IRngyHVkEPtR" className="">
                  <span data-loki-id="LGlHwGBTJOnr" className="">
                  </span>
                  <span data-loki-id="rVqkZxRRxbgv">
                    Contamination Sensors (CS 1000)
                  </span>
                </li>
              </ul>
              <a data-loki-id="HKiLAOcFSmGZ" href="#rfq">
                Enquire about HYDAC
              </a>
            </div>
            <div data-loki-id="peDJtMHidTMm" className="">
              <svg data-loki-id="SzbICwcBVkPI" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="WOBXLTuXbxvS" className="">
        <div data-loki-id="snilWkTmiFdT" className="">
          <div data-loki-id="nnsdNfAzNJVk" className="">
            <div data-loki-id="vrBsmlEJEArC" className="">
              <svg data-loki-id="NrSRmwUqonaQ" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z">
                </path>
                <path d="M16 9a5 5 0 0 1 0 6">
                </path>
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728">
                </path>
              </svg>
            </div>
            <div data-loki-id="HAejaHvyWUZv" className="">
              <div data-loki-id="nHNlDdntgjbc" className="">
                <svg data-loki-id="hXWtVeWjTJme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z">
                  </path>
                  <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14">
                  </path>
                  <path d="M8 6v8">
                  </path>
                </svg>
                <span data-loki-id="wKYlMjCpKtbC">
                  Marine Signaling
                </span>
              </div>
              <h3 data-loki-id="HorViCVcADLh">
                Kockums Sonics
              </h3>
              <p data-loki-id="fPbTodhdVpIH">
                The industry gold standard for IMO-compliant ship horns. From Tyfon MKT series to fully integrated signaling controllers, we ensure your vessel is heard when it matters most.
              </p>
              <div data-loki-id="hUdLgSEMJSYC" className="">
                <div data-loki-id="kHaNcYUTAdHG" className="">
                  <span data-loki-id="WWCSDrOPMJWH">
                    Tyfon® Series
                  </span>
                  <span data-loki-id="xvLWSoCpyeXc">
                    MKT 75/150 Whistles
                  </span>
                </div>
                <div data-loki-id="nCPTTSFOvLiK" className="">
                  <span data-loki-id="ahMLTkNPObBc">
                    TCP-2000
                  </span>
                  <span data-loki-id="FWhWUjZgwbNn">
                    Signaling Controller
                  </span>
                </div>
              </div>
              <a data-loki-id="zcXUjxZmhmts" href="#rfq">
                Enquire about Tyfons
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="gUVBAlignLPM" className="">
        <div data-loki-id="BXuwlDkUuEIm" className="">
          <div data-loki-id="KVCcfmbCFIol" className="">
            <div data-loki-id="HRGsNXZdIOZG" className="">
              <div data-loki-id="uyyMzfqFgMPV" className="">
                <svg data-loki-id="EPtAHXqHkrUo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16">
                  </path>
                  <path d="M18 17V9">
                  </path>
                  <path d="M13 17V5">
                  </path>
                  <path d="M8 17v-3">
                  </path>
                </svg>
                <span data-loki-id="XMuEttkLfJzi">
                  Cargo Safety
                </span>
              </div>
              <h3 data-loki-id="emTWscoZHZVD">
                Loadmaster &amp; Levelmaster
              </h3>
              <p data-loki-id="KkkUoJbRHSrE">
                Precision tank gauging and loading computers for product and chemical tankers. We support configuration, calibration, and spares for Loadmaster 2000 and Levelmaster LGT systems.
              </p>
              <ul data-loki-id="oRapoBlDWnmu" className="">
                <li data-loki-id="pMOrGnVfaXek" className="">
                  <span data-loki-id="pXPvyWJZRdVH" className="">
                  </span>
                  <span data-loki-id="yxUdGhUpLikr">
                    Loadmaster 2000 Software Support
                  </span>
                </li>
                <li data-loki-id="obWDAekhsqtx" className="">
                  <span data-loki-id="ikKDUIooqZBz" className="">
                  </span>
                  <span data-loki-id="MyCtbkClMmaE">
                    LGT &amp; LS200 Sensors
                  </span>
                </li>
              </ul>
              <a data-loki-id="ZcXZaxdJpQoO" href="#rfq">
                Enquire about Loadmaster
              </a>
            </div>
            <div data-loki-id="aWPERYfSmsRL" className="">
              <svg data-loki-id="VukVGELRGdSy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3">
                </ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5">
                </path>
                <path d="M3 12A9 3 0 0 0 21 12">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="elGztDEwTAhZ" className="">
        <div data-loki-id="oMXrDIbHnCJe" className="">
          <div data-loki-id="lIcLLHevNQve" className="">
            <div data-loki-id="jhixbTWIFaDk" className="">
              <svg data-loki-id="AcganpbOMIwN" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.8 19.6A2 2 0 1 0 14 16H2">
                </path>
                <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2">
                </path>
                <path d="M9.8 4.4A2 2 0 1 1 11 8H2">
                </path>
              </svg>
            </div>
            <div data-loki-id="pwubrUZGbnyM" className="">
              <div data-loki-id="FaVKoDQiFelF" className="">
                <svg data-loki-id="zAzmryemJfyE" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z">
                  </path>
                  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97">
                  </path>
                </svg>
                <span data-loki-id="PvPSEBwjrfFW">
                  Tank Cleaning
                </span>
              </div>
              <h3 data-loki-id="TMmcapjrmVaN">
                Polarjet Marine
              </h3>
              <p data-loki-id="xHYmYpvShHbh">
                Advanced programmable rotary jet machines for efficient cargo and slop tank cleaning. ANVA supplies and commissions PJ-series machines for chemical tankers and industrial applications.
              </p>
              <div data-loki-id="FCrqnKKxGfCT" className="">
                <div data-loki-id="isPnDPEoyulk" className="">
                  <span data-loki-id="UZojGKtyxuWk">
                    PJ15 / PJ30 / PJ60
                  </span>
                  <span data-loki-id="dUImxzQwMFnR">
                    Rotary Jet Heads
                  </span>
                </div>
                <div data-loki-id="PtpgsmcuzkXT" className="">
                  <span data-loki-id="aHohFbTAFieW">
                    Portable CIP
                  </span>
                  <span data-loki-id="nHHgVAGgdOJB">
                    Mobile Cleaning Units
                  </span>
                </div>
              </div>
              <a data-loki-id="lsfChCpfPctE" href="#rfq">
                Enquire about Polarjet
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="NSVMzfnTHeFY" className="">
        <div data-loki-id="FtQbmiyoSyjJ" className="">
          <div data-loki-id="PbFLTkAQfnky" className="">
            <div data-loki-id="zYDwoBGpnXEz" className="">
              <div data-loki-id="iPYKDnRZLGtd" className="">
                <svg data-loki-id="tEbksnqSFSRY" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10">
                  </circle>
                  <circle cx="12" cy="12" r="2">
                  </circle>
                </svg>
                <span data-loki-id="xwkfDPDFwLGc">
                  Propulsion
                </span>
              </div>
              <h3 data-loki-id="IwopeZQUsNoL">
                Subhadra Propellers
              </h3>
              <p data-loki-id="tchgoPCmOzhZ">
                Combining hydrodynamic efficiency with rugged durability. We provide full propulsion packages including CPP, FPP, nozzles, and rudder systems for tugs, workboats, and support vessels.
              </p>
              <ul data-loki-id="ckfCWPyIHrSD" className="">
                <li data-loki-id="eMwxMNXWiERw" className="">
                  <span data-loki-id="uIIkylSgYUqC" className="">
                  </span>
                  <span data-loki-id="IvdEFhlfofdT">
                    SR-CP Controllable Pitch Propellers
                  </span>
                </li>
                <li data-loki-id="aDUmZLtrbFzx" className="">
                  <span data-loki-id="miAabSVgzdDn" className="">
                  </span>
                  <span data-loki-id="EcYCjfAsOSIz">
                    Nozzle Propellers (High Bollard Pull)
                  </span>
                </li>
                <li data-loki-id="WaEATuJKnUxh" className="">
                  <span data-loki-id="YkIjDwZYYnfN" className="">
                  </span>
                  <span data-loki-id="AejttlVjmxdi">
                    Complete Rudder Assemblies
                  </span>
                </li>
              </ul>
              <a data-loki-id="fqrOrxSlpKhc" href="#rfq">
                Enquire about Propulsion
              </a>
            </div>
            <div data-loki-id="OVyWACQVPoTT" className="">
              <svg data-loki-id="gRahuzxnWvwn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z">
                </path>
                <path d="M12 12v.01">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="cFXAgJGnGPHD" className="">
        <div data-loki-id="JTIElNVqvRcE" className="">
          <div data-loki-id="wLgLNAoSeNTg" className="">
            <div data-loki-id="lbrjedAZsmHI" className="">
              <svg data-loki-id="IlliemGBGOlk" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 7-3 5h4l-3 5">
                </path>
                <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935">
                </path>
                <path d="M22 14v-4">
                </path>
                <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936">
                </path>
              </svg>
            </div>
            <div data-loki-id="uzjFneXFdvkP" className="">
              <div data-loki-id="iEsJYyyRPXLP" className="">
                <svg data-loki-id="xckavdrgJYwo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                  </path>
                </svg>
                <span data-loki-id="sSHsAdXhkJgZ">
                  Corrosion Control
                </span>
              </div>
              <h3 data-loki-id="XDSAKfauuore">
                ICCP &amp; MGPS Systems
              </h3>
              <p data-loki-id="sDnweCQFLfwn">
                Protecting your hull and sea chests from corrosion and biofouling. We supply and install Impressed Current Cathodic Protection (ICCP) and Marine Growth Prevention Systems (MGPS) for newbuilds and retrofits.
              </p>
              <div data-loki-id="EHxnuAwDLkMD" className="">
                <div data-loki-id="ZBdqjkxiLmNy" className="">
                  <span data-loki-id="WDjWNpdSMKVD">
                    ICCP
                  </span>
                  <span data-loki-id="AkfUOBClfHQP">
                    Hull Corrosion Protection
                  </span>
                </div>
                <div data-loki-id="aahwNQLgWHTk" className="">
                  <span data-loki-id="EOYUeRTKbMsZ">
                    MGPS
                  </span>
                  <span data-loki-id="gAlVJCbHmcfi">
                    Sea Chest Antifouling
                  </span>
                </div>
              </div>
              <a data-loki-id="mwwkrdeVLVKT" href="#rfq">
                Enquire about ICCP/MGPS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section data-loki-id="wYMJtWDBbAgD" className="">
        <div data-loki-id="cMNLrlEbxLXA" className="">
          <div data-loki-id="lLDGCLkqDquU" className="">
            <svg data-loki-id="LdvuuUgKmbnS" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14">
              </path>
              <path d="m7.5 4.27 9 5.15">
              </path>
              <polyline points="3.29 7 12 12 20.71 7">
              </polyline>
              <line x1="12" x2="12" y1="22" y2="12">
              </line>
              <circle cx="18.5" cy="15.5" r="2.5">
              </circle>
              <path d="M20.27 17.27 22 19">
              </path>
            </svg>
          </div>
          <h2 data-loki-id="lrVTwMjdVKSx">
            General Marine Spares
          </h2>
          <p data-loki-id="rykXWkNtaoto">
            Beyond our exclusive representations, we utilize a global network to source genuine and OEM-equivalent spares for almost any machinery onboard. Pumps, compressors, electrical, and auxiliary systems.
          </p>
          <div data-loki-id="hJTrDRQehZZI" className="">
            <div data-loki-id="FTKPAVDgfEqV">
              Main Engines
            </div>
            <div data-loki-id="beRLegwXAcbt">
              Auxiliary Engines
            </div>
            <div data-loki-id="zGOKAsFcCyGP">
              Purifiers
            </div>
            <div data-loki-id="xNXVraaiKDAi">
              Compressors
            </div>
          </div>
        </div>
      </section>
      <footer data-loki-id="EnSDwRneCzlm" className="" data-shared-component="site-footer">
        <div data-loki-id="UyNbOrqBbqOA" className="">
          <div data-loki-id="plxkfmBdKicj" className="">
            <div data-loki-id="vSoTyRYSRCUR" className="">
              <div data-loki-id="OrRfwrjVvVrV" className="">
                <svg data-loki-id="PPhHXyrbNHGU" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 6v16">
                  </path>
                  <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1">
                  </path>
                  <path d="M9 11h6">
                  </path>
                  <circle cx="12" cy="4" r="2">
                  </circle>
                </svg>
                <span data-loki-id="DpHBTaIBpklv" className="">
                  <span data-loki-id="dNrIsHgIENCp">
                    ANVA
                  </span>
                  <span data-loki-id="BiFuIMMHTwHZ">
                    .
                  </span>
                  <span data-loki-id="ygYLEiiSfDmV">
                    MARINE
                  </span>
                </span>
              </div>
              <p data-loki-id="LDFuNajkjeGK">
                Advanced Nautical Ventures. Delivering end-to-end marine solutions, ship repairs, and global OEM support from the heart of Dubai Maritime City.
              </p>
              <div data-loki-id="YZMWfnYcHDLA" className="">
                <a data-loki-id="ngJanVTuSTLU" className="" href="#">
                  <svg data-loki-id="JkaRvouzrIsu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                    </path>
                    <rect width="4" height="12" x="2" y="9">
                    </rect>
                    <circle cx="4" cy="4" r="2">
                    </circle>
                  </svg>
                </a>
                <a data-loki-id="lKGWbxURzvnu" className="" href="#">
                  <svg data-loki-id="txBRnPrwptXg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
            <div data-loki-id="opBuatgafbMs" className="">
              <h4 data-loki-id="UMEDfieiRZGl">
                Quick Links
              </h4>
              <ul data-loki-id="VgqbKCAGPaNg" className="">
                <li data-loki-id="TizVLEdoFPjI" className="">
                  <a data-loki-id="ABULKvQfYezE" href="#about">
                    About Us
                  </a>
                </li>
                <li data-loki-id="WXImVpmPKqJy" className="">
                  <a data-loki-id="LkyvPLjLcSWF" href="#services">
                    Services &amp; Brands
                  </a>
                </li>
                <li data-loki-id="UkZLnuzzCdBk" className="">
                  <a data-loki-id="AZQumLiRYPtJ" href="#">
                    ISO &amp; Quality
                  </a>
                </li>
                <li data-loki-id="oWWmpsXjnqIp" className="">
                  <a data-loki-id="AltVcXBLgpmC" href="#">
                    Vendor Portal
                  </a>
                </li>
                <li data-loki-id="VotkJpRrGxDF" className="">
                  <a data-loki-id="vLEMyFJwVGDb" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div data-loki-id="ZtQqUdypnpLE" className="">
              <h4 data-loki-id="OYYdciiUHtRq">
                Contact
              </h4>
              <ul data-loki-id="ZFZfyaGeWWiR" className="">
                <li data-loki-id="fjbRXvnUfOvT" className="">
                  <svg data-loki-id="uYQsqnlHSeUZ" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3">
                    </circle>
                  </svg>
                  <span data-loki-id="CuDQezMPxYGi">
                    Dubai Maritime City,
      Industrial Precinct, UAE
                  </span>
                </li>
                <li data-loki-id="JkEPyJkeuplp" className="">
                  <svg data-loki-id="aBeehRQcBZeF" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                    </path>
                  </svg>
                  <span data-loki-id="knGiJoyKZjWM">
                    +971 4 000 0000
                  </span>
                </li>
                <li data-loki-id="ySTNhRyUvXuN" className="">
                  <svg data-loki-id="NKWhcMYbQGLL" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
                    </path>
                    <rect x="2" y="4" width="20" height="16" rx="2">
                    </rect>
                  </svg>
                  <span data-loki-id="JstifupCRBbU">
                    info@anvamarine.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div data-loki-id="TMLtgSJToVxy" className="">
            <p data-loki-id="NYflBdruxRfp">
              &amp;copy; 2024 Advanced Nautical Ventures. All rights reserved.
            </p>
            <div data-loki-id="fUHKfayhSwYU" className="">
              <a data-loki-id="wcGKYkLkJwSE" href="#">
                Privacy Policy
              </a>
              <a data-loki-id="DbfsqomdteFZ" href="#">
                Terms of Service
              </a>
              <span data-loki-id="KgRdCkhxFtvi">
                Powered by Loki.Build
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
