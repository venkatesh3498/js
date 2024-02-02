const string = "SSSs";

if (string === "SSS") {
  console.log("valid");
} else if (string === "SSSs") {
  console.log("valid");
} else {
  console.log("invalid");
}

switch (string) {
  case "SSS":
    console.log("valid");
    break;
  case "SSSs":
    console.log("valid");
    break;
  default:
    console.log("invalid");
    break;
}
