import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../Components/ProblemDescription";
import CodeEditorPanel from "../Components/CodeEditorPanel";
import OutputPanel from "../Components/OutputPanel";

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const currentProblem = PROBLEMS[currentProblemId];
  //   update problems when url params changed
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);
  const handleLanguageChange = (e) => {};
  const handleProblemChange = () => {};
  const triggerConfetti = () => {};
  const checkIfTestsPassed = () => {};
  const handleRunCode = () => {};

  return (
    <div className=" h-screen w-screen bg-base-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PanelGroup direction="horizontal">
          <Panel defaultSize={60} minSize={30}>
            {/* left panel - problem desc */}
            <ProblemDescription />
          </Panel>
          <PanelResizeHandle className=" w-2 bg-base-300" />
          <Panel defaultSize={40} minSize={30}>
            {/* right panel - code editor and output */}
            <PanelGroup direction="vertical">
                {/* Top Panel - code editor */}
                <Panel defaultSize={70} minSize={30}>
                    <CodeEditorPanel />
                </Panel>
                <PanelResizeHandle className="h-2 bg-base-300 "/>
                {/* bottom Panel - output */}
                <Panel defaultSize={30} minSize={30}>
                    <OutputPanel />
                </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
