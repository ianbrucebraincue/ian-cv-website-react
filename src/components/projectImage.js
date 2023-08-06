const ProjectImage = ({ name }) => {
  try {
    // Import image on demand
    const image = require(`../assets/${name}`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return (
        <img src={ image } alt={ name }/>
    );
  } catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default ProjectImage;