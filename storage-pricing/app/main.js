let storage = document.getElementById("storage");
let transfer = document.getElementById("transfer");
let labelStorage = document.getElementById("storage-label");
let labelTransfer = document.getElementById("transfer-label");
let graphLength = document.querySelector(".page__output-graph").offsetWidth;
let storageValue = 0;
let transferValue = 0;
let graphs = document.querySelectorAll(".graph");


// ADD EFFECT FOR GRAPH
document.addEventListener("input", () => {
  // backblaze
  getValueBlackblaze();
  getValueVultr()
  getValueBunny()
  getValueScaleway()
  setColor();
});

// READ INPUT-RANGE VALUE
storage.oninput = (event) => {
  storageValue = storage.value;
  labelStorage.innerText = storageValue;
};

transfer.oninput = (event) => {
  transferValue = transfer.value;
  labelTransfer.innerText = transferValue;
};

// GET VALUE BACKBLAZE
function getValueBlackblaze() {
  backblaze.value =
    storageValue * backblaze.storage + transferValue * backblaze.transfer;
  if (backblaze.value >= Number(backblaze.min)) {
    backblaze.graph.style.width = `${
      backblaze.value * (graphLength / widthRatio)
    }px`;
    document.querySelector(".backblaze_price").innerText =
      backblaze.value.toFixed(2);
  } else {
    document.querySelector(".backblaze_graph").style.width = `${
      backblaze.min * (graphLength / widthRatio)
    }px`;
    document.querySelector(".backblaze_price").innerText = backblaze.min;
  }
}

function getValueVultr(){
  vultr.value = storageValue * vultr.storage + transferValue * vultr.transfer;
if (vultr.value >= Number(vultr.min)) {
  document.querySelector(".vultr_graph").style.width = `${
    vultr.value * (graphLength / widthRatio)
  }px`;
  document.querySelector(".vultr_price").innerText = vultr.value.toFixed(2);
} else {
  document.querySelector(".vultr_graph").style.width = `${
    vultr.min * (graphLength / widthRatio)
  }px`;
  document.querySelector(".vultr_price").innerText = vultr.min;
}
}
  
function getValueBunny(){
  if (!!document.querySelector("#r11").checked) {
    bunny.value = storageValue * bunny.hdd + transferValue * bunny.transfer;
    if (bunny.value < Number(bunny.max)) {
      document.querySelector(".bunny_graph").style.width = `${
        bunny.value * (graphLength / widthRatio)
      }px`;
      document.querySelector(".bunny_price").innerText = bunny.value.toFixed(2);
    } else {
      document.querySelector(".bunny_graph").style.width = `${
        bunny.max * (graphLength / widthRatio)
      }px`;
      document.querySelector(".bunny_price").innerText = bunny.max;
    }
  } else {
    bunny.value = storageValue * bunny.ssd + transferValue * bunny.transfer;
    if (bunny.value < Number(bunny.max)) {
      document.querySelector(".bunny_graph").style.width = `${
        bunny.value * (graphLength / widthRatio)
      }px`;
      document.querySelector(".bunny_price").innerText = bunny.value.toFixed(2);
    } else {
      document.querySelector(".bunny_graph").style.width = `${
        bunny.max * (graphLength / widthRatio)
      }px`;
      document.querySelector(".bunny_price").innerText = bunny.max;
    }
  }
}

function getValueScaleway(){
  if (!!document.querySelector("#r21").checked) {
    if (storageValue > 75 && transferValue > 75) {
      scaleway.value =
        (storageValue - 75) * scaleway.multi +
        (transferValue - 75) * scaleway.transfer;
    } else if (storageValue < 75 && transferValue > 75) {
      scaleway.value = (transferValue - 75) * scaleway.transfer;
    } else if (storageValue > 75 && transferValue < 75) {
      scaleway.value = (storageValue - 75) * scaleway.multi;
    } else {
      scaleway.value = 0;
    }
    document.querySelector(".scaleway_graph").style.width = `${
      scaleway.value * (graphLength / widthRatio)
    }px`;
    document.querySelector(".scaleway_price").innerText =
      scaleway.value.toFixed(2);
  } else {
    if (storageValue > 75 && transferValue > 75) {
      scaleway.value =
        (storageValue - 75) * scaleway.single +
        (transferValue - 75) * scaleway.transfer;
    } else if (storageValue < 75 && transferValue > 75) {
      scaleway.value = (transferValue - 75) * scaleway.transfer;
    } else if (storageValue > 75 && transferValue < 75) {
      scaleway.value = (storageValue - 75) * scaleway.single;
    } else {
      scaleway.value = 0;
    }
    document.querySelector(".scaleway_graph").style.width = `${
      scaleway.value * (graphLength / widthRatio)
    }px`;
    document.querySelector(".scaleway_price").innerText =
      scaleway.value.toFixed(2);
  }
}

// RATIO CONST

const widthRatio = 90;

const companyArr = [
  {
    value: 0,
    min: 7,
    storage: 0.005,
    transfer: 0.01,
    lowest: false,
    graph: document.querySelector(".backblaze_graph"),
  },
  {
    value: 0,
    max: 10,
    hdd: 0.01,
    ssd: 0.02,
    transfer: 0.01,
    lowest: false,
    graph: document.querySelector(".bunny_graph"),
  },
  {
    value: 0,
    multi: 0.06,
    single: 0.03,
    transfer: 0.02,
    lowest: false,
    graph: document.querySelector(".scaleway_graph"),
  },
  {
    value: 0,
    min: 5,
    storage: 0.01,
    transfer: 0.01,
    lowest: false,
    graph: document.querySelector(".vultr_graph"),
  },
];

let backblaze = companyArr[0];
let bunny = companyArr[1];
let scaleway = companyArr[2];
let vultr = companyArr[3];

async function setColor() {
  let minVal = Number(graphs[0].style.width.slice(0, -2));
  let graphMin;
  for (let index = 0; index < graphs.length; index++) {
    const element = graphs[index];
    element.style.backgroundColor = "rgb(133, 133, 133)";
    const elementWidth = Number(element.style.width.slice(0, -2));
    console.log(elementWidth);
    if (elementWidth <= minVal) {
      minVal = elementWidth;
      graphMin = element;
    }
  }
  if (graphMin) {
    graphMin.style.backgroundColor = "rgb(255, 153, 0)";
  }
}
