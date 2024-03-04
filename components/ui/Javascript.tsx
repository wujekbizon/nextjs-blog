import { motion } from 'framer-motion'

const Javascript: React.FC<IconAttributes> = ({
  width = 56,
  height = 56,
  primary = '#F0DB4F',
  secondary = '#323330',
}) => {
  return (
    <motion.svg
      style={{ width, height }}
      viewBox="0 0 79 78"
      fill="none"
      animate={{
        transformOrigin: ['50%', '50%'],
        x: [0, -30, 15, -15, 9, -6, 0],
        rotate: [0, -6, 6, -3.6, 2.4, -1.2, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <g clipPath="url(#clip0_201_6684)">
        <g mask="url(#mask0_201_6684)">
          <path d="M0.5 0H78.5V78H0.5V0Z" fill={primary} />
          <motion.path
            animate
            d="M72.1152 59.3974C71.5443 55.8385 69.2236 52.8505 62.3504 50.0626C59.9629 48.9653 57.3011 48.1794 56.5078 46.3702C56.226 45.3174 56.189 44.7242 56.3669 44.0866C56.8785 42.018 59.3475 41.3729 61.3049 41.9661C62.5654 42.3887 63.7591 43.36 64.4783 44.9096C67.8445 42.7298 67.8371 42.7446 70.1874 41.2469C69.3274 39.9123 68.8677 39.2969 68.3042 38.726C66.28 36.4646 63.5219 35.3005 59.1103 35.3895C58.3466 35.4859 57.5755 35.5896 56.8118 35.6861C54.6098 36.2422 52.5114 37.3988 51.2806 38.9484C47.5882 43.1376 48.6411 50.4704 53.1342 53.4882C57.5606 56.8099 64.0631 57.5661 64.8935 60.6728C65.7017 64.4764 62.0984 65.7071 58.5171 65.2697C55.8776 64.7211 54.4096 63.3791 52.8228 60.9397C49.9016 62.6302 49.9016 62.6302 46.8987 64.3578C47.6105 65.9148 48.3593 66.6192 49.5531 67.9686C55.2029 73.7 69.3422 73.4182 71.878 64.7433C71.9817 64.4467 72.6639 62.4596 72.1152 59.3974ZM42.9023 35.8491H35.6065C35.6065 42.1514 35.5769 48.4092 35.5769 54.7115C35.5769 58.7227 35.7845 62.4003 35.132 63.5273C34.0643 65.7441 31.2987 65.4699 30.0383 65.0397C28.7556 64.4095 28.1031 63.5124 27.3468 62.2446C27.1392 61.8813 26.9835 61.5995 26.9316 61.5773C24.952 62.7858 22.9797 64.0017 21 65.2103C21.9862 67.2345 23.4394 68.9917 25.3004 70.1335C28.0808 71.8017 31.8177 72.3133 35.7252 71.4162C38.2683 70.6747 40.4629 69.14 41.6122 66.8045C43.273 63.7423 42.9171 60.0351 42.9023 55.9349C42.9394 49.247 42.9023 42.5592 42.9023 35.8491Z"
            fill={secondary}
          />
        </g>
      </g>
    </motion.svg>
  )
}
export default Javascript