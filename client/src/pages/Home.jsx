import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { AnimatePresence, motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../componenets";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Zootoos 
              </h1>
              <h1 className="text-4xl">
                LET'S DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-300 text-base">
                {" "}
                Create your unique and exclusive shirt with out brand-new
                3Dcutomization tool. <strong>
                  Unleash your imagination{" "}
                </strong>{" "}
                and define you own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
