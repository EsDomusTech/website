// Replace with your Google Analytics Measurement ID when you set up GA
// e.g. "G-XXXXXXXXXX" — find it in GA4 > Admin > Data Streams
const GA_ID = "G-XXXXXXXXXX";

export function loadGA(): void {
  if (typeof window === "undefined") return;
  if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return;
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}
