import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

export function ClassificationContainer({ datasource, currentSelected }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3" style={{ textTransform: 'uppercase' }}>
          {currentSelected.label}
        </Typography>
        <Typography>{currentSelected.description}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper variant="outlined" style={{ height: 'auto' }}>
          <Image src={datasource.imgSrc ? URL.createObjectURL(datasource.imgSrc) : 'http://www.example.com/demo-image.jpg'} alt="alternate" width={240} height={240} />
        </Paper>
      </Grid>
      {datasource.predictionResponse && (
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 10 }}>
            <Typography marginBottom={2}>Prediction::</Typography>
            <Typography>{datasource.predictionResponse.map((eachClass, i)=>{
              return <Typography key={i}>{eachClass.class}, {eachClass.confidence}</Typography>
            })}</Typography>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12} md={12}>
        <Typography variant="h6">How it works::</Typography>
        <Typography fontSize={10}>Upload an image by clicking the icon the bottom right and let the system classify the image based on available class.</Typography>
      </Grid>
    </Grid>
  );
}

ClassificationContainer.propTypes = {
  datasource: PropTypes.shape({
    imgSrc: PropTypes.any,
    predictionResponse: PropTypes.arrayOf({class: PropTypes.string.isRequired, confidence: PropTypes.string.isRequired}),
    currentSelected: PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  }),
};
