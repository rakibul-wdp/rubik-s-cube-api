export const detectOS = () => {
  const userAgent = window.navigator.userAgent;
  let os = "Unknown";

  if (userAgent.includes("Win")) {
    os = "Windows";
  } else if (userAgent.includes("Mac")) {
    os = "MacOS";
  } else if (userAgent.includes("X11")) {
    os = "UNIX";
  } else if (userAgent.includes("Linux")) {
    os = "Linux";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    os = "iOS";
  }

  return os;
};

export const getOSVersion = (): string => {
  const userAgent: string = window.navigator.userAgent;
  const platformMatch: RegExpMatchArray | null = userAgent.match(/\(([^)]+)\)/);
  const osVersionMatch: RegExpMatchArray | null =
    userAgent.match(/OS (\d+)[_.](\d+)/);

  if (!platformMatch) {
    return "Unknown platform";
  }

  const platform: string = platformMatch[1];

  if (!osVersionMatch) {
    return platform;
  }

  const osVersion: string = `${osVersionMatch[1]}.${osVersionMatch[2]}`;

  return `${platform} ${osVersion}`;
};
