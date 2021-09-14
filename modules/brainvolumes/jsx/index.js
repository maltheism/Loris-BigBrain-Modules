import React from 'react';
import FilterableDataTable from 'jsx/FilterableDataTable';


/**
 * BrainVolumes component
 * @return {JSX.Element}
 */
const BrainVolumes = () => {
  // data for filter table.
  const data = [
    // 2015 -------------------/
    // MNI ICBM 152 Space
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_100um_2009b_sym.nii.gz', '2.9 GB', '2.9 GB', ''],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_200um_2009b_sym.nii.gz', '391 MB', '387 MB', ''],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_300um_2009b_sym.nii.gz', '120 MB', '118 MB', ''],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_400um_2009b_sym.nii.gz', '52 MB', '51.2 MB', ''],
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_100um_2009b_sym.nii.gz', '1.1 GB', '1.1 GB', ''],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_200um_2009b_sym.nii.gz', '149 MB', '149 MB', ''],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_300um_2009b_sym.nii.gz', '46.5 MB', '46.2 MB', ''],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_400um_2009b_sym.nii.gz', '20.5 MB', '20.4 MB', ''],
    ['ICBM 2009b Symmetric Template', '500um isotropic', '8-bit gray scale unsigned byte', '2015', 'For more info, please see the BIC page', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/mni_icbm152_t1_tal_nlin_sym_09b_hires.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/mni_icbm152_t1_tal_nlin_sym_09b_hires.nii', '120 MB', '120 MB', 'http://www.bic.mni.mcgill.ca/ServicesAtlases/ICBM152NLin2009'],
    // MNI ADNI Space
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_100um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_100um_adni.nii.gz', '2.7 GB', '2.7 GB', ''],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_200um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_200um_adni.nii.gz', '373 MB', '369 MB', ''],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_300um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_300um_adni.nii.gz', '115 MB', '113 MB', ''],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_400um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_400um_adni.nii.gz', '50 MB', '49.3 MB', ''],
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_100um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_100um_adni.nii.gz', '1 GB', '1 GB', ''],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volume/MNI-ADNI_Space/mnc/full8_200um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volume/MNI-ADNI_Space/nii/full8_200um_adni.nii.gz', '144 MB', '144 MB', ''],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_300um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_300um_adni.nii.gz', '45 MB', '44.8 MB', ''],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_400um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_400um_adni.nii.gz', '19.9 MB', '19.8 MB', ''],
    // Histological Space
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_100um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_100um_optbal.nii.gz', '1.4 GB', '1.3 GB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_200um_optbal.nii.gz', '177 MB', '176 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_300um_optbal.nii.gz', '53.6 MB', '52.9 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_400um_optbal.nii.gz', '23 MB', '22.7 MB', ''],
    ['Full volume, 1000um with optical balancing', '1000um isotropic (TODO)', '16-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_1000um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_1000um_optbal.nii.gz', '1.6 MB', '1.6 MB', ''],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_100um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_100um_optbal.nii.gz', '576 MB', '574 MB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_200um_optbal.nii.gz', '74.3 MB', '74 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_300um_optbal.nii.gz', '22.7 MB', '22.6 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_400um_optbal.nii.gz', '9.9 MB', '9.8 MB', ''],
    ['Full volume, 1000um with optical balancing', '1000um isotropic (TODO)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_1000um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_1000um_optbal.nii.gz', '734 kB', '709 kB', ''],
    // 2013 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full volume, 100um without optical balancing', '100um isotropic (1970x2330x1890)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_2009b_sym.mnc', 'File too large', '3136 MB', '', ''],
    ['Full volume, 100um with optical balancing', '100um isotropic (1970x2330x1890)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_optbal_2009b_sym.mnc', 'File too large', '3156 MB', '', ''],
    ['Full volume, 200um without optical balancing', '200um isotropic (985x1165x945)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_2009b_sym.nii.gz', '411 MB', '409 MB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (985x1165x945)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal_2009b_sym.mnc', 'File too large', '412 MB', '', ''],
    ['Full volume, 300um without optical balancing', '300um isotropic (657x777x630)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_2009b_sym.nii.gz', '126 MB', '125 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (657x777x630)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal_2009b_sym.nii.gz', '126 MB', '125 MB', ''],
    ['Full volume, 400um without optical balancing', '400um isotropic (493x583x473)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_2009b_sym.nii.gz', '55 MB', '55 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (493x583x473)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal_2009b_sym.nii.gz', '55 MB', '54 MB', ''],
    ['Full volume, 100um without optical balancing', '100um isotropic (1970x2330x1890)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_2009b_sym.mnc', 'File too large', '1305 MB', '', ''],
    ['Full volume, 100um with optical balancing', '100um isotropic (1970x2330x1890)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_optbal_2009b_sym.mnc', 'File too large', '1178 MB', '', ''],
    ['Full volume, 200um without optical balancing', '200um isotropic (985x1165x945)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_2009b_sym.nii.gz', '172 MB', '164 MB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (985x1165x945)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal_2009b_sym.nii.gz', '156 MB', '156 MB', ''],
    ['Full volume, 300um without optical balancing', '300um isotropic (657x777x630)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_2009b_sym.nii.gz', '54 MB', '51 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (657x777x630)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal_2009b_sym.nii.gz', '49 MB', '48 MB', ''],
    ['Full volume, 400um without optical balancing', '400um isotropic (493x583x473)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_2009b_sym.nii.gz', '24 MB', '22 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (493x583x473)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal_2009b_sym.nii.gz', '21 MB', '21 MB', ''],
    ['ICBM 2009b Symmetric Template', '500um isotropic', '8-bit gray scale unsigned byte', '2013', 'For more info, please see the BIC page', '', '', '', '', 'http://www.bic.mni.mcgill.ca/ServicesAtlases/ICBM152NLin2009'],
    // 7T syn24 template in MNI Space
    ['Full volume, 400um', '400um isotropic (454x544x454)', 'float', '2013', 'See template "7T syn24 template, 400um"', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full-xz-avg9-pad20_n3_csffill_regSyn24_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full-xz-avg9-pad20_n3_csffill_regSyn24_400um.nii.gz', '94 MB', '94 MB', ''],
    ['7T syn24 template, 400um', '400um isotropic (454x544x454)', 'float', '2013', 'This model is provided by the Max Planck Institute for Human Cognitive and Brain Sciences, Department of Neurophysics (contact: Dr. Pierre-Louis Bazin, bazin@cbs.mpg.de).', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/syn24-average-t1map-lvl2-10.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/syn24-average-t1map-lvl2-10.nii.gz', '104 MB', '104 MB', ''],
    // Histological Space
    ['Full volume, 100um without optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um.mnc', 'File too large', '1459 MB', '', ''],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_optbal.mnc', 'File too large', '1486 MB', '', ''],
    ['Full volume, 200um without optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um.nii.gz', '188 MB', '187 MB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal.nii.gz', '189 MB', '188 MB', ''],
    ['Full volume, 300um without optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um.nii.gz', '57 MB', '56 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal.nii.gz', '57 MB', '56 MB', ''],
    ['Full volume, 400um without optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um.nii.gz', '24 MB', '24 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal.nii.gz', '24 MB', '24 MB', ''],
    ['Full volume, 100um without optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um.mnc', 'File too large', '632 MB', '', ''],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_optbal.mnc', 'File too large', '634 MB', '', ''],
    ['Full volume, 200um without optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um.nii.gz', '83 MB', '82 MB', ''],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal.nii.gz', '82 MB', '80 MB', ''],
    ['Full volume, 300um without optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um.nii.gz', '25 MB', '25 MB', ''],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal.nii.gz', '25 MB', '24 MB', ''],
    ['Full volume, 400um without optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um.nii.gz', '11 MB', '11 MB', ''],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal.nii.gz', '11 MB', '11 MB', ''],
  ];
  // fields configured for filter.
  const fields = [
    {
      label: 'Description',
      show: true,
      filter: {
        name: 'Description',
        type: 'text',
      },
    },
    {
      label: 'Resolution',
      show: true,
      filter: {
        name: 'Resolution',
        type: 'text',
      },
    },
    {
      label: 'Encoding',
      show: true,
      filter: {
        name: 'Encoding',
        type: 'text',
      },
    },
    {
      label: 'Year',
      show: false,
      filter: {
        name: 'Year',
        type: 'select',
        options: {
          '2015': '2015',
          '2013': '2013',
        },
      },
    },
    {
      label: 'Comments',
      show: true,
      filter: {
        name: 'Comments',
        type: 'text',
      },
    },
    {
      label: 'Minc',
      show: true,
    },
    {
      label: 'NIFTI',
      show: true,
    },
    {
      label: 'MincFileSize',
      show: false,
    },
    {
      label: 'NIFTIFileSize',
      show: false,
    },
    {
      label: 'CommentsLink',
      show: false,
    },
  ];

  /**
   * Modify behaviour of specified column cells in the Data Table component
   *
   * @param {string} column - column name
   * @param {string} cell - cell content
   * @param {array} rowData - array of cell contents for a specific row
   * @param {array} rowHeaders - array of table headers (column names)
   *
   * @return {*} a formatted table cell for a given column
   */
  const formatColumn = (column, cell, rowData, rowHeaders) => {
    let reactElement = <td>{cell}</td>;
    switch (column) {
      case 'Minc':
        if (cell !== '') {
          reactElement = <td><a href={cell} target='_blank'>
            Minc ({rowData['MincFileSize']})
          </a></td>;
        }
        break;
      case 'NIFTI':
        if (cell !== '' && cell !== 'File too large') {
          reactElement = <td><a href={cell} target='_blank'>
            NIFTI ({rowData['NIFTIFileSize']})
          </a></td>;
        }
        console.log(rowData);
        console.log(rowHeaders);
        break;
      case 'Comments':
        if (rowData['CommentsLink']) {
          reactElement = (
            <td>
              For more info, please see this <a href={rowData['CommentsLink']}
                                                target='_blank'>
              page</a>.
            </td>
          );
        }
        console.log(rowData);
        console.log(rowHeaders);
        break;
      default:
        break;
    }
    return reactElement;
  };

  return (
    <>
      <h1>3D Volume Data Release</h1>
      <FilterableDataTable
        name={'filterableBrainVolumes'}
        data={data}
        fields={fields}
        getFormattedCell={formatColumn}
      />
    </>
  );
};
BrainVolumes.defaultProps = {
  url: {
    base: '',
  },
};

/**
 * Render component on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <BrainVolumes
      url={{
        base: loris.BaseURL,
      }}
    />,
    document.getElementById('lorisworkspace')
  );
});
