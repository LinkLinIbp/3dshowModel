/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 mother-board.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MotherBoard(props) {
  const { nodes, materials } = useGLTF('/mother-board.glb')
  return (
    <group {...props} dispose={null}  position={[0.035,0.08,0.01]} rotation={[Math.PI, Math.PI/2,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.001}  >
        <group position={[167.858, 3.437, -220.652]} rotation={[-Math.PI / 2, 0, 0]} >
          <group position={[-33.1, -1.842, -1.857]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh geometry={nodes.top_layer_out___.geometry} material={materials.Namibia} position={[0, 1, 0]} />
            <mesh geometry={nodes.base___.geometry} material={materials.Spring} />
            <mesh geometry={nodes.top_layer_in___.geometry} material={materials.Valencia} position={[0, 1, 0]} />
            <mesh geometry={nodes.top_layer_out____1.geometry} material={materials.Bilbao} rotation={[0, 0, -Math.PI]} />
            <mesh geometry={nodes.copper_layer___.geometry} material={materials.London} position={[0, 1, 0]} />
            <mesh geometry={nodes.copper_layer____1.geometry} material={materials.Abyss} position={[0, -0.045, 0]} />
            <mesh geometry={nodes.bottom_layer_in___.geometry} material={materials['Quiet Passion']} position={[0, -0.05, 0]} />
            <mesh geometry={nodes.core___.geometry} material={materials.Rosemary} position={[0, 1.05, 0]} />
            <mesh geometry={nodes.shiled___.geometry} material={materials.Florida} position={[0, 1.1, 0]} />
            <mesh geometry={nodes.core_glue___.geometry} material={materials['Eagle Eye']} position={[0, 1.05, 0]} />
            <mesh geometry={nodes.sheild_words_metal___.geometry} material={materials.Cosmos} position={[0, 4.1, 0]} />
          </group>
          <group position={[-32.95, -2.042, -5.107]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <mesh geometry={nodes.base_board___.geometry} material={materials.Porcelain} />
            <mesh geometry={nodes.xi___.geometry} material={materials['Dizzy Days']} position={[17.086, 0, -17.202]} />
            <mesh geometry={nodes.xi____1.geometry} material={materials.Aura} position={[-18.037, 0, 16.249]} />
          </group>
          <group position={[-56.817, 30.302, -3.59]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
            <mesh geometry={nodes['FRAME_-_080304_-_HVM'].geometry} material={materials['Breath of Spring']} />
            <mesh geometry={nodes['FRAME_INSULATOR_-_080304_-_HVM'].geometry} material={materials.Aria} />
            <mesh geometry={nodes.PRT0007.geometry} material={materials.Anita} position={[-0.387, -0.099, -0.367]} />
            <mesh geometry={nodes.PRT0008.geometry} material={materials.Pyramid} />
            <mesh geometry={nodes['PT44P18-6401'].geometry} material={materials['Clean Slate']} position={[4.147, 2.804, 0.792]} />
            <mesh geometry={nodes.SRV_SHOULDER_SCREW.geometry} material={materials['Early Harvest']} position={[-11.069, 0.832, -0.134]} />
            <mesh geometry={nodes.SRV_TORX_SCREW.geometry} material={materials.Placebo} position={[20.573, 3.653, -3.787]} />
            <mesh geometry={nodes.SRV_TORX_SCREW_1.geometry} material={materials['Evening Glow']} position={[20.573, 3.653, -39.787]} />
          </group>
        </group>
        <group position={[135.89, 0, -158.38]}>
          <group position={[-135.89, 0, -12.645]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.Audio_module_shield.geometry} material={materials['Clear View']} position={[0, 17.5, 0]} />
            <mesh geometry={nodes['35mm_dummy'].geometry} material={materials.Diamond} position={[5.692, 6.752, 2.5]} />
            <mesh geometry={nodes['35mm_dummy_1'].geometry} material={materials.Chicago} position={[5.692, 17.738, 2.5]} />
            <mesh geometry={nodes['35mm_dummy_2'].geometry} material={materials.Bitter} position={[5.692, 28.724, 2.5]} />
            <mesh geometry={nodes['35mm_dummy_3'].geometry} material={materials.Nana} position={[-6.565, 28.724, 2.5]} />
            <mesh geometry={nodes['35mm_dummy_4'].geometry} material={materials['Hawaiian Passion']} position={[-6.565, 17.738, 2.5]} />
            <mesh geometry={nodes.spdif_housing.geometry} material={materials.Axel} position={[-6.565, 6.752, 2.5]} />
          </group>
          <group position={[-135.59, 0, -51.887]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.RJ45_dual_usb_shield.geometry} material={materials['Coral Garden']} position={[0, 15.421, 0]} />
            <mesh geometry={nodes.RJ45.geometry} material={materials['Quiet Time']} position={[0, 23.08, -7.993]} />
            <mesh geometry={nodes.usb3x2.geometry} material={materials.Hugo} position={[-6.55, -0.1, 0.07]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
          </group>
          <group position={[-135.59, 0, -75.557]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.quad_usb_shield.geometry} material={materials['Simply Delicious']} position={[0, 16.316, 0]} />
            <mesh geometry={nodes.usb3x4.geometry} material={materials.Zoya} position={[-6.55, 0, 0.07]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
          </group>
          <group position={[-135.89, 0, -34.164]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.wifi_shield.geometry} material={materials['Exotic Life']} />
            <mesh geometry={nodes.SMA_Jack_Bulkhead_small_nut.geometry} material={materials['Magic Spell']} position={[1.39, 8.901, -1]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.SMA_Jack_Bulkhead_small_nut_1.geometry} material={materials['Extra Mile']} position={[1.39, 18.382, -1]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.SMA_Jack_Bulkhead_small_nut_2.geometry} material={materials['Fusion Elixir']} position={[1.39, 27.864, -1]} rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-135.59, 0, -97.057]} rotation={[0, -Math.PI / 2, 0]}>
            <mesh geometry={nodes.quad_usb_shield_1.geometry} material={materials.Columbia} position={[0, 16.316, 0]} />
            <mesh geometry={nodes.usb3x4_1.geometry} material={materials['Crazy Dream']} position={[-6.55, 0, 0.07]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
          </group>
          <mesh geometry={nodes.hdmi.geometry} material={materials.Circus} position={[-135.29, 16.072, -120.552]} rotation={[0, -Math.PI / 2, 0]} />
          <mesh geometry={nodes.displayport.geometry} material={materials.Utah} position={[-135.19, 3.5, -120.552]} rotation={[0, -Math.PI / 2, 0]} />
        </group>
        <mesh geometry={nodes.hyte_mb_pcb.geometry} material={materials.Serenade} />
        <mesh geometry={nodes['16x'].geometry} material={materials.Brooklyn} position={[37.592, 0, -20.434]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['16x_1'].geometry} material={materials.Nobel} position={[37.592, 0, -122.034]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['1x'].geometry} material={materials.Andres} position={[37.592, 0, -61.074]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.ddr4_socket.geometry} material={materials.Alley} position={[185.42, 0.95, -219.438]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.ddr4_socket_1.geometry} material={materials.Valley} position={[194.945, 0.95, -219.438]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.ddr4_socket_2.geometry} material={materials.Pluto} position={[204.47, 0.95, -219.438]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.ddr4_socket_3.geometry} material={materials.Xena} position={[213.995, 0.95, -219.438]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.mb_24_pin.geometry} material={materials['Instant Glory']} position={[239.04, 0, -226.1]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.usb_3_header.geometry} material={materials.Abbey} position={[240.34, 0, -160.7]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.cpu_8_pin_8.geometry} material={materials.Emily} position={[60.197, 0, -300]} />
        <mesh geometry={nodes.cpu_8_pin_8_1.geometry} material={materials.Montana} position={[39.877, 0, -300]} />
        <mesh geometry={nodes['4_pin_fan'].geometry} material={materials.Galaxy} position={[196.262, 1.65, -2.85]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes['4_pin_fan_1'].geometry} material={materials['Calm Balm']} position={[210.547, 1.65, -2.85]} rotation={[-Math.PI, 0, Math.PI]} />
        <mesh geometry={nodes['4_pin_fan_2'].geometry} material={materials.Nordic} position={[67.292, 1.65, -2.85]} rotation={[Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes['4_pin_fan_3'].geometry} material={materials['Dark Marmalade']} position={[240.99, 1.65, -60.796]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['4_pin_fan_4'].geometry} material={materials.Karma} position={[185.894, 1.65, -301.95]} />
        <mesh geometry={nodes['4_pin_fan_5'].geometry} material={materials.Arizona} position={[175.976, 1.65, -301.95]} />
        <mesh geometry={nodes['4_pin_fan_6'].geometry} material={materials.Luna} position={[153.18, 1.65, -301.95]} />
        <mesh geometry={nodes['4_pin_fan_7'].geometry} material={materials.Cupcake} position={[85.824, 1.65, -301.95]} />
        <mesh geometry={nodes['4_pin_fan_8'].geometry} material={materials['Retro Vibe']} position={[89.766, 1.65, -162.139]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['4_pin_fan_9'].geometry} material={materials.Noah} position={[98.106, 1.65, -162.139]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin'].geometry} material={materials['Gentle Glow']} position={[219.272, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_1'].geometry} material={materials.Maverick} position={[221.812, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_2'].geometry} material={materials.Dallas} position={[224.352, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_3'].geometry} material={materials.Melbourne} position={[226.892, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top'].geometry} material={materials.Stanley} position={[229.432, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_4'].geometry} material={materials.Ace} position={[231.972, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_bottom'].geometry} material={materials.Nemo} position={[234.512, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_5'].geometry} material={materials.Twilight} position={[237.052, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_bottom_1'].geometry} material={materials.Monarch} position={[239.592, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_6'].geometry} material={materials['Secret Path']} position={[242.132, 0, -5.229]} />
        <mesh geometry={nodes['254_pitch_dual_pin_7'].geometry} material={materials.Tulip} position={[40.735, 0, -4.266]} />
        <mesh geometry={nodes['254_pitch_dual_pin_8'].geometry} material={materials['Wild Party']} position={[43.275, 0, -4.266]} />
        <mesh geometry={nodes['254_pitch_dual_pin_9'].geometry} material={materials.Kentucky} position={[45.815, 0, -4.266]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top_1'].geometry} material={materials['Falling Star']} position={[48.355, 0, -4.266]} />
        <mesh geometry={nodes['254_pitch_dual_pin_10'].geometry} material={materials.Union} position={[50.895, 0, -4.266]} />
        <mesh geometry={nodes['254_pitch_dual_pin_11'].geometry} material={materials['Lucky Day']} position={[77.448, 0, -4.167]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top_2'].geometry} material={materials.Freya} position={[82.528, 0, -4.167]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_12'].geometry} material={materials['Light Glaze']} position={[91.821, 0, -4.228]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top_3'].geometry} material={materials['Exclusive Elixir']} position={[96.901, 0, -4.228]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['20_pitch_dual_pin'].geometry} material={materials.Alvin} position={[103.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_1'].geometry} material={materials['Cosmic Dust']} position={[105.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_2'].geometry} material={materials['Ocean Tropic']} position={[107.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_3'].geometry} material={materials.Colorado} position={[109.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_4'].geometry} material={materials['Play Time']} position={[111.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_no_bottom'].geometry} material={materials.Vera} position={[113.304, 0, -5.526]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_bottom_2'].geometry} material={materials['Casa Blanca']} position={[79.029, 0, -9.047]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_13'].geometry} material={materials['Spanish Style']} position={[84.109, 0, -9.047]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_14'].geometry} material={materials.Andorra} position={[105.629, 0, -11.372]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_bottom_3'].geometry} material={materials.Congo} position={[108.169, 0, -11.372]} />
        <mesh geometry={nodes['254_pitch_dual_pin_15'].geometry} material={materials['Perfect Tint']} position={[110.709, 0, -11.372]} />
        <mesh geometry={nodes['254_pitch_dual_pin_16'].geometry} material={materials.Emperor} position={[174.622, 0, -2.919]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.usb_2_header.geometry} material={materials.Arctic} position={[137.65, 0, -5.681]} />
        <mesh geometry={nodes.usb_2_header_1.geometry} material={materials.Panama} position={[163.064, 0, -5.708]} />
        <mesh geometry={nodes['254_pitch_dual_pin_17'].geometry} material={materials.Aero} position={[208.826, 0, -302.052]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top_4'].geometry} material={materials.Beluga} position={[213.906, 0, -302.052]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_18'].geometry} material={materials.Aloha} position={[223.013, 0, -302.049]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes['254_pitch_dual_pin_no_top_5'].geometry} material={materials.Glamour} position={[228.093, 0, -302.049]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.chip_8pin.geometry} material={materials.Magnet} position={[228.998, 0, -257.186]} />
        <mesh geometry={nodes.chip_8pin_1.geometry} material={materials.Melissa} position={[228.789, 0, -250.299]} />
        <mesh geometry={nodes.chip_8pin_2.geometry} material={materials.Bazaar} position={[237.584, 0, -274.37]} />
        <mesh geometry={nodes.chip_8pin_3.geometry} material={materials.Habanero} position={[231.874, 0, -265.35]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.chip_8pin_narrow.geometry} material={materials.Ava} position={[206.852, 0, -14.999]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.chip_8pin_narrow_1.geometry} material={materials.Fiesta} position={[214.197, 0, -15.174]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.chip_8pin_skinny.geometry} material={materials['Private Tone']} position={[69.424, 0.342, -10.314]} />
        <mesh geometry={nodes.choke.geometry} material={materials['Time Capsule']} position={[139.312, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_1.geometry} material={materials['Secret Story']} position={[129.812, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_2.geometry} material={materials['Pacific Spirit']} position={[120.312, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_3.geometry} material={materials.Madagascar} position={[110.812, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_4.geometry} material={materials.Belize} position={[101.312, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_5.geometry} material={materials.Amulet} position={[91.812, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_6.geometry} material={materials['Little Valley']} position={[82.312, 0, -272.063]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_7.geometry} material={materials.Yolanda} position={[79.421, 0, -256.011]} />
        <mesh geometry={nodes.choke_8.geometry} material={materials['California Dream']} position={[79.421, 0, -246.431]} />
        <mesh geometry={nodes.choke_9.geometry} material={materials['Crystal Mist']} position={[79.421, 0, -236.851]} />
        <mesh geometry={nodes.choke_10.geometry} material={materials.Ozark} position={[79.421, 0, -227.271]} />
        <mesh geometry={nodes.choke_11.geometry} material={materials.Retro} position={[79.421, 0, -217.691]} />
        <mesh geometry={nodes.choke_12.geometry} material={materials['Lonely Road']} position={[79.421, 0, -208.111]} />
        <mesh geometry={nodes.choke_13.geometry} material={materials.Nautico} position={[79.421, 0, -198.531]} />
        <mesh geometry={nodes.choke_14.geometry} material={materials.Independence} position={[79.421, 0, -188.951]} />
        <mesh geometry={nodes.choke_small.geometry} material={materials['Fresh Scent']} position={[141.132, 0, -168.074]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_small_1.geometry} material={materials['Cosmic Aura']} position={[146.637, 0, -168.166]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_small_2.geometry} material={materials.Solar} position={[19.613, 0, -77.612]} />
        <mesh geometry={nodes.choke_medium.geometry} material={materials.Denver} position={[108.445, 0, -171.972]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_medium_1.geometry} material={materials.Milano} position={[122.654, 0, -171.76]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.choke_small_3.geometry} material={materials.Kathmandu} position={[129.197, 0, -158.208]} />
        <mesh geometry={nodes.capacitor.geometry} material={materials.Infusion} position={[106.719, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_1.geometry} material={materials.Nevada} position={[114.019, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_2.geometry} material={materials['Cactus Hill']} position={[121.319, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_3.geometry} material={materials['Bright Idea']} position={[128.619, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_4.geometry} material={materials.Warrior} position={[135.919, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_5.geometry} material={materials.Niagara} position={[143.219, 0, -263.037]} />
        <mesh geometry={nodes.capacitor_6.geometry} material={materials.Belfast} position={[90.843, 0, -243.441]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_7.geometry} material={materials['Simply Elegant']} position={[90.843, 0, -236.141]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_8.geometry} material={materials.Milton} position={[90.843, 0, -228.841]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_9.geometry} material={materials.Origami} position={[90.843, 0, -221.541]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_10.geometry} material={materials['Candy Bar']} position={[90.843, 0, -214.241]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_11.geometry} material={materials.Canberra} position={[90.843, 0, -206.941]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_12.geometry} material={materials.Vienna} position={[90.843, 0, -199.641]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_13.geometry} material={materials.Felicia} position={[98.143, 0, -243.441]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_14.geometry} material={materials['Lunar Dust']} position={[98.143, 0, -236.141]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_15.geometry} material={materials.Anchor} position={[98.143, 0, -228.841]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_16.geometry} material={materials['Island Moment']} position={[98.143, 0, -221.541]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_17.geometry} material={materials.Mila} position={[98.143, 0, -206.941]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_18.geometry} material={materials.Picasso} position={[115.726, 0, -173.542]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_19.geometry} material={materials.Hudson} position={[130.326, 0, -173.542]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_20.geometry} material={materials.Durango} position={[137.626, 0, -173.542]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_21.geometry} material={materials.Ballon} position={[225.655, 0, -201.541]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_22.geometry} material={materials['Irish Charm']} position={[239.973, 0, -255.27]} rotation={[0, 0.407, 0]} />
        <mesh geometry={nodes.capacitor_23.geometry} material={materials['Duck Hunt']} position={[225.842, 0, -231.9]} rotation={[0, 0.644, 0]} />
        <mesh geometry={nodes.capacitor_24.geometry} material={materials['Disco LIghts']} position={[225.325, 0, -272.801]} rotation={[0, 0.885, 0]} />
        <mesh geometry={nodes.capacitor_25.geometry} material={materials.Balboa} position={[176.93, 0, -230.229]} rotation={[0, 1.111, 0]} />
        <mesh geometry={nodes.capacitor_26.geometry} material={materials.Safari} position={[225.837, 0, -224.118]} rotation={[0, 0.833, 0]} />
        <mesh geometry={nodes.capacitor_27.geometry} material={materials.Haiti} position={[225.655, 0, -194.241]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_28.geometry} material={materials['Classic Calm']} position={[225.655, 0, -186.941]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_29.geometry} material={materials.Godzilla} position={[45.133, 0, -111.418]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_30.geometry} material={materials.Harlequin} position={[44.217, 0, -70.68]} rotation={[0, 0.379, 0]} />
        <mesh geometry={nodes.capacitor_31.geometry} material={materials['True Love']} position={[20.004, 0, -92.004]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.capacitor_32.geometry} material={materials['Cold Spring']} position={[20.004, 0, -84.704]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.capacitor_33.geometry} material={materials.Ballad} position={[20.004, 0, -70.104]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.capacitor_34.geometry} material={materials['Mystic Harbor']} position={[52.433, 0, -111.418]} rotation={[0, 0.19, 0]} />
        <mesh geometry={nodes.capacitor_35.geometry} material={materials['Cozy Vibe']} position={[51.517, 0, -70.68]} rotation={[0, 0.379, 0]} />
        <mesh geometry={nodes.audio_chip.geometry} material={materials['Cool Touch']} position={[13.699, 2, -40.4]} />
        <mesh geometry={nodes.audio_capacitor.geometry} material={materials.Aztec} position={[26.727, 0, -25.471]} />
        <mesh geometry={nodes.audio_capacitor_1.geometry} material={materials.Afternoon} position={[19.427, 0, -25.471]} />
        <mesh geometry={nodes.audio_capacitor_2.geometry} material={materials.Venus} position={[26.727, 0, -18.171]} />
        <mesh geometry={nodes.audio_capacitor_3.geometry} material={materials.Masterpiece} position={[19.427, 0, -18.171]} />
        <mesh geometry={nodes.audio_capacitor_4.geometry} material={materials.Camouflage} position={[26.727, 0, -10.871]} />
        <mesh geometry={nodes.audio_capacitor_5.geometry} material={materials.Charlotte} position={[19.427, 0, -10.871]} />
        <mesh geometry={nodes.audio_capacitor_6.geometry} material={materials['Day Dream']} position={[26.727, 0, -3.571]} />
        <mesh geometry={nodes.M2_NGFF_62mm_short.geometry} material={materials.Cleopatra} position={[106.75, 1.825, -39]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.M2_NGFF_62mm_short_1.geometry} material={materials['Distant Land']} position={[114.75, 1.825, -142.651]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.M2_NGFF_62mm_short_2.geometry} material={materials['Caribbean Kiss']} position={[160.75, 1.825, -67]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['20_pitch_dual_pin_5'].geometry} material={materials.Fiji} position={[115.304, 0, -5.526]} />
        <mesh geometry={nodes['20_pitch_dual_pin_6'].geometry} material={materials.Hampton} position={[188.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_7'].geometry} material={materials['Hidden Place']} position={[190.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_8'].geometry} material={materials['Morning Shine']} position={[192.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_9'].geometry} material={materials.Amazonian} position={[194.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_10'].geometry} material={materials.Adonis} position={[196.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_11'].geometry} material={materials.Abstract} position={[198.709, 0, -24.895]} />
        <mesh geometry={nodes['20_pitch_dual_pin_no_top'].geometry} material={materials.Keira} position={[200.709, 0, -24.895]} />
        <mesh geometry={nodes.dual_stacked_SATA.geometry} material={materials.Tirol} position={[229.84, -0.257, -109.02]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.dual_stacked_SATA_1.geometry} material={materials.Bizarre} position={[229.84, -0.257, -92.02]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.dual_stacked_SATA_2.geometry} material={materials.Valerie} position={[229.84, -0.257, -75.02]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.capacitor_36.geometry} material={materials['Early Glow']} position={[235.835, 0, -126.802]} rotation={[0, 0.379, 0]} />
        <mesh geometry={nodes.capacitor_37.geometry} material={materials.Ballerina} position={[85.682, 0, -294.031]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.capacitor_38.geometry} material={materials.Refresh} position={[105.682, 0, -294.031]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.capacitor_39.geometry} material={materials['Garden Glow']} position={[125.682, 0, -294.031]} rotation={[0, 0.596, 0]} />
        <mesh geometry={nodes.CR2032_battery_holder.geometry} material={materials['Carefree Buzz']} position={[46.445, 8, -95.873]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.CR2032_battery.geometry} material={materials.Medusa} position={[46.445, 6.27, -95.873]} rotation={[0, 0.574, Math.PI]} />
        <mesh geometry={nodes.m2_standoff.geometry} material={materials['Herbal Scent']} position={[39, 0, -142.651]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.m2_standoff_1.geometry} material={materials['Pleasant Dream']} position={[85, 0, -67]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.m2_standoff_2.geometry} material={materials.Fantasy} position={[31, 0, -39]} rotation={[0, 0, -Math.PI]} />
        <mesh geometry={nodes.M2_SSD.geometry} material={materials.Jackpot} position={[39, 1.83, -142.651]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.M2_SSD_1.geometry} material={materials.Alhambra} position={[85, 1.83, -67]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.M2_SSD_2.geometry} material={materials.Zuni} position={[31, 1.83, -39]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N'].geometry} material={materials['Timeless Beauty']} position={[39, 10, -142.651]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N_1'].geometry} material={materials.Hipster} position={[153, 10, -142.651]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N_2'].geometry} material={materials.Butterfly} position={[169, 8, -67]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N_3'].geometry} material={materials.Siren} position={[85, 10, -67]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N_4'].geometry} material={materials.Matrix} position={[31, 8, -39]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh geometry={nodes['pan_cross_head_am_B1867M_-_M3_x_05_x_8_Type_I_Cross_Recessed_PHMS_--8N_5'].geometry} material={materials.Malibu} position={[236, 8, -39]} rotation={[0, 0, -Math.PI / 2]} />
      </group>
    </group>
  )
}

useGLTF.preload('/mother-board.glb')
