import { Box } from "@chakra-ui/react";
import Arrow from "./Arrow";
import styles from "../styles/Home.module.css";

function Projects() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        bg="#161616"
      >
        <Arrow
          title="Univents"
          img="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e"
          code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          desc="A social media application to connect students through university events."
          tech="React Native, Redux, Firebase in TypeScript."
        />

        <Arrow
          title="Supabase"
          img="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e"
          code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          live="supabase-psql-tut.netlify.app"
          desc="TBC"
          tech="React, PostgreSQL, Supabase in TypeScript."
        />

        <Arrow
          title="Tauri"
          img="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e"
          code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          desc="A Text editor in markdown for Windows, Mac and Linux."
          tech="NextJS, React, Tauri, Pocketbase in TypeScript."
        />
        <Arrow
          title="Twitter Bot"
          img="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e"
          code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          desc="A Bot that tweets our prayer times, hosted in Heroku."
          tech="Twitter API, Tweepy in Python."
        />
        <Arrow
          title="Covid-19"
          img="https://optimise2.assets-servd.host/steadfast-tern/production/chaffinch_2021-03-07-210042.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1615150842&s=668f19916b972a6b88bbb2b3681a9d7e"
          code="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          live="https://chakra-ui.com/docs/styled-system/style-props#layout-width-and-height"
          desc="Audio classifcation to diagnoise Covid-19 with coughs sounds using a Convolutional Neural Network. "
          tech="TensorFlow, Keras, NumPy, Matplotlib, pandas, librosa, scikit-learn in Python."
        />
      </Box>
    </>
  );
}

export default Projects;
