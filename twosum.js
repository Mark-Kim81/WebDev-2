let array = [];
let target = null;
let displayValue = "";

// nuumpad

function numpress(num) {
    displayValue += num;
    document.getElementById("numpad_display").innerText = displayValue
}

function numbackspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("numpad_display").innerText = displayValue || "_";
}

function numclear() {
    displayValue = "";
    document.getElementById("numpad_display").innerText = "_";
}

// Array
function toArray() {
    if (displayValue === "") return;
    array.push(Number(displayValue));
    numclear();
    show();
}

function popArray() {
    if (array.length === 0) return;
    array.pop();
    show();
}

function setTarget() {
    if (displayValue === "") return;
    target = Number(displayValue);
    numclear();
    show();
}

// TwoSum
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

// Show

function show() {
    // Array display
    const arrayDisplay = document.getElementById("array-display");
    arrayDisplay.innerHTML = "";

    if (array.length === 0) {
        arrayDisplay.innerHTML = "<span class='empty-msg'>Array is empty</span>";
    } else {
        for (let i = 0; i < array.length; i++) {
            const box = document.createElement("span");
            box.className = "array-element";
            box.innerText = array[i];
            arrayDisplay.appendChild(box);
        }
    }

// Target display
    document.getElementById("target-display").innerText =
        target !== null ? target : "None";

    // Result display
    const resultDiv = document.getElementById("result");

    if (target === null || array.length < 2) {
        resultDiv.innerHTML = "<span class='empty-msg'>Waiting for input</span>";
        return;
    }

    const result = twoSum(array, target);

    if (result === null) {
        resultDiv.innerHTML = "<span class='result-none'>No solution found.</span>";
    } else {
        const [i, j] = result;
        resultDiv.innerHTML =
            "<span class='result-found'>" + "Indices: [" + i + ", " + j + "]" + " &nbsp;→&nbsp; " +
            "nums[" + i + "] + nums[" + j + "] = " + array[i] + " + " + array[j] + " = " + target + "</span>";
    }
}