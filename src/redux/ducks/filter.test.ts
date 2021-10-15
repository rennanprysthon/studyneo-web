import rewire from "rewire"
const filter = rewire("./filter")
const request = filter.__get__("request")
const selectMatter = filter.__get__("selectMatter")
const selectArea = filter.__get__("selectArea")
const loading = filter.__get__("loading")
const error = filter.__get__("error")
const reset = filter.__get__("reset")
// @ponicode
describe("request", () => {
    test("0", () => {
        let object: any = [{ id: 987650, area_id: 56784, title: "Dynamic Quality Specialist" }, { id: 987650, area_id: 12, title: "Internal Interactions Strategist" }, { id: "a1969970175", area_id: 987650, title: "Direct Functionality Orchestrator" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 12, title: "International Intranet Coordinator" }, { id: 12345, area_id: "a1969970175", title: "International Intranet Coordinator" }]
        let object2: any = [{ id: 56784, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Dynamic Quality Specialist" }, { id: 12345, area_id: 12345, title: "Internal Interactions Strategist" }]
        let object3: any = [{ id: 56784, area_id: 56784, title: "Dynamic Quality Specialist" }, { id: "a1969970175", area_id: 12, title: "Future Interactions Representative" }, { id: 987650, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Internal Interactions Strategist" }]
        let object4: any = [{ id: 987650, area_id: 987650, title: "Dynamic Quality Specialist" }]
        let object5: any = [{ id: 12345, title: "Direct Functionality Orchestrator", matters: object }, { id: 12, title: "International Intranet Coordinator", matters: object2 }, { id: "a1969970175", title: "International Intranet Coordinator", matters: object3 }, { id: 56784, title: "Future Interactions Representative", matters: object4 }]
        let callFunction: any = () => {
            request(1, { type: "array", response: object5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object: any = [{ id: "a1969970175", area_id: 56784, title: "Dynamic Quality Specialist" }, { id: 12, area_id: 12, title: "Direct Functionality Orchestrator" }, { id: 12, area_id: "a1969970175", title: "Direct Functionality Orchestrator" }]
        let object2: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Internal Interactions Strategist" }, { id: 12, area_id: 12345, title: "International Intranet Coordinator" }, { id: 12345, area_id: 987650, title: "Direct Functionality Orchestrator" }, { id: "a1969970175", area_id: 12, title: "Dynamic Quality Specialist" }, { id: 56784, area_id: 56784, title: "Future Interactions Representative" }]
        let object3: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "International Intranet Coordinator" }]
        let object4: any = [{ id: "a1969970175", area_id: 12345, title: "Future Interactions Representative" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 12345, title: "Internal Interactions Strategist" }]
        let object5: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 56784, title: "International Intranet Coordinator" }, { id: "a1969970175", area_id: 12345, title: "Direct Functionality Orchestrator" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Direct Functionality Orchestrator" }, { id: 12, area_id: 56784, title: "Dynamic Quality Specialist" }, { id: 987650, area_id: 12345, title: "International Intranet Coordinator" }]
        let object6: any = [{ id: 987650, title: "International Intranet Coordinator", matters: object }, { id: "a1969970175", title: "Dynamic Quality Specialist", matters: object2 }, { id: 56784, title: "Future Interactions Representative", matters: object3 }, { id: 56784, title: "Dynamic Quality Specialist", matters: object4 }, { id: 12, title: "Future Interactions Representative", matters: object5 }]
        let callFunction: any = () => {
            request({}, { type: "string", response: object6 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object: any = [{ id: 987650, area_id: 987650, title: "Direct Functionality Orchestrator" }, { id: 12, area_id: 987650, title: "Internal Interactions Strategist" }, { id: 12345, area_id: 12, title: "Internal Interactions Strategist" }]
        let object2: any = [{ id: 987650, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "International Intranet Coordinator" }, { id: 12, area_id: 987650, title: "Internal Interactions Strategist" }, { id: 12, area_id: "a1969970175", title: "International Intranet Coordinator" }, { id: 56784, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Dynamic Quality Specialist" }, { id: 12345, area_id: 56784, title: "Future Interactions Representative" }]
        let object3: any = [{ id: 987650, area_id: 987650, title: "Internal Interactions Strategist" }]
        let object4: any = [{ id: 12345, area_id: 12, title: "Future Interactions Representative" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 12, title: "International Intranet Coordinator" }]
        let object5: any = [{ id: 56784, area_id: 987650, title: "Direct Functionality Orchestrator" }, { id: 12345, area_id: 12345, title: "Direct Functionality Orchestrator" }, { id: 987650, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Direct Functionality Orchestrator" }, { id: 12, area_id: 12345, title: "Direct Functionality Orchestrator" }, { id: 12, area_id: 56784, title: "Internal Interactions Strategist" }]
        let object6: any = [{ id: 987650, title: "International Intranet Coordinator", matters: object }, { id: 12, title: "Direct Functionality Orchestrator", matters: object2 }, { id: "a1969970175", title: "International Intranet Coordinator", matters: object3 }, { id: 12, title: "Internal Interactions Strategist", matters: object4 }, { id: "a1969970175", title: "Future Interactions Representative", matters: object5 }]
        let callFunction: any = () => {
            request({}, { type: "object", response: object6 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object: any = [{ id: 12, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Future Interactions Representative" }, { id: 12, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "Internal Interactions Strategist" }, { id: "a1969970175", area_id: 56784, title: "International Intranet Coordinator" }]
        let object2: any = [{ id: "a1969970175", area_id: 56784, title: "Future Interactions Representative" }, { id: 12, area_id: 56784, title: "Direct Functionality Orchestrator" }, { id: 12, area_id: "a1969970175", title: "International Intranet Coordinator" }, { id: "a1969970175", area_id: "a1969970175", title: "Direct Functionality Orchestrator" }, { id: "a1969970175", area_id: 12, title: "Dynamic Quality Specialist" }]
        let object3: any = [{ id: 56784, area_id: "a1969970175", title: "Direct Functionality Orchestrator" }]
        let object4: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 12345, title: "Dynamic Quality Specialist" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: "a1969970175", title: "Future Interactions Representative" }]
        let object5: any = [{ id: 12345, area_id: 56784, title: "Internal Interactions Strategist" }, { id: 987650, area_id: 12345, title: "Dynamic Quality Specialist" }, { id: 12, area_id: "bc23a9d531064583ace8f67dad60f6bb", title: "International Intranet Coordinator" }, { id: 56784, area_id: 12, title: "Future Interactions Representative" }, { id: 12, area_id: 987650, title: "International Intranet Coordinator" }]
        let object6: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", title: "Internal Interactions Strategist", matters: object }, { id: "a1969970175", title: "Internal Interactions Strategist", matters: object2 }, { id: "a1969970175", title: "Direct Functionality Orchestrator", matters: object3 }, { id: 12, title: "Direct Functionality Orchestrator", matters: object4 }, { id: "a1969970175", title: "Internal Interactions Strategist", matters: object5 }]
        let callFunction: any = () => {
            request("Alabama", { type: "object", response: object6 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object: any = [{ id: 12, area_id: 12, title: "International Intranet Coordinator" }, { id: 12, area_id: 56784, title: "Dynamic Quality Specialist" }, { id: 12345, area_id: 12345, title: "Future Interactions Representative" }]
        let object2: any = [{ id: 56784, area_id: 12345, title: "International Intranet Coordinator" }, { id: "a1969970175", area_id: 12345, title: "Internal Interactions Strategist" }, { id: 12345, area_id: 987650, title: "Direct Functionality Orchestrator" }, { id: 56784, area_id: 12, title: "Future Interactions Representative" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: "a1969970175", title: "Future Interactions Representative" }]
        let object3: any = [{ id: 987650, area_id: 12345, title: "Direct Functionality Orchestrator" }]
        let object4: any = [{ id: "a1969970175", area_id: 987650, title: "Dynamic Quality Specialist" }, { id: 987650, area_id: 987650, title: "Direct Functionality Orchestrator" }]
        let object5: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 56784, title: "International Intranet Coordinator" }, { id: 987650, area_id: 56784, title: "Direct Functionality Orchestrator" }, { id: 987650, area_id: 56784, title: "Internal Interactions Strategist" }, { id: "bc23a9d531064583ace8f67dad60f6bb", area_id: 12, title: "Direct Functionality Orchestrator" }, { id: 12, area_id: "a1969970175", title: "Future Interactions Representative" }]
        let object6: any = [{ id: "bc23a9d531064583ace8f67dad60f6bb", title: "Future Interactions Representative", matters: object }, { id: 56784, title: "Direct Functionality Orchestrator", matters: object2 }, { id: 12345, title: "International Intranet Coordinator", matters: object3 }, { id: 12345, title: "International Intranet Coordinator", matters: object4 }, { id: 12, title: "Dynamic Quality Specialist", matters: object5 }]
        let callFunction: any = () => {
            request("Abruzzo", { type: "array", response: object6 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            request(Infinity, { type: "", response: [] })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectMatter", () => {
    test("0", () => {
        let callFunction: any = () => {
            selectMatter(1, { type: "object", matter: 1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            selectMatter({}, { type: "object", matter: 1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            selectMatter({}, { type: "array", matter: -0.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            selectMatter({}, { type: "string", matter: -0.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            selectMatter({}, { type: "number", matter: -1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            selectMatter(-Infinity, { type: "", matter: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("selectArea", () => {
    test("0", () => {
        let callFunction: any = () => {
            selectArea(true, { type: "string", area: 550 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            selectArea("Alabama", { type: "object", area: 400 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            selectArea({}, { type: "array", area: 50 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            selectArea(-100, { type: "object", area: 520 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            selectArea(true, { type: "string", area: 320 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            selectArea(NaN, { type: "", area: NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loading", () => {
    test("0", () => {
        let callFunction: any = () => {
            loading("Florida", { type: "array", response: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            loading(0, { type: "number", response: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            loading(true, { type: "number", response: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            loading(1, { type: "number", response: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            loading(true, { type: "object", response: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            loading(Infinity, { type: "", response: true })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("error", () => {
    test("0", () => {
        let callFunction: any = () => {
            error(true, { type: "array", response: "processing" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            error(false, { type: "number", response: "done" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            error({}, { type: "string", response: "completed" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            error({}, { type: "array", response: "draft" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            error("Florida", { type: "array", response: "completed" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            error(NaN, { type: "", response: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("reset", () => {
    test("0", () => {
        let callFunction: any = () => {
            reset("Île-de-France", { type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            reset({}, { type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            reset(0, { type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            reset(true, { type: "object" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            reset("Florida", { type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            reset(NaN, { type: "" })
        }
    
        expect(callFunction).not.toThrow()
    })
})
