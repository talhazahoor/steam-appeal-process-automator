import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();

export const analyzeBanReason = async (banReason: string) => {
  const tensor = tf.tensor2d([banReason], [1, 1]);
  const prediction = model.predict(tensor);
  return prediction;
};