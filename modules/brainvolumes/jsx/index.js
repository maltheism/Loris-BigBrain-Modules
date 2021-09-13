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
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_100um_2009b_sym.nii.gz'],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_200um_2009b_sym.nii.gz'],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_300um_2009b_sym.nii.gz'],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full16_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full16_400um_2009b_sym.nii.gz'],
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_100um_2009b_sym.nii.gz'],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_200um_2009b_sym.nii.gz'],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_300um_2009b_sym.nii.gz'],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/full8_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/full8_400um_2009b_sym.nii.gz'],
    ['ICBM 2009b Symmetric Template', '500um isotropic', '8-bit gray scale unsigned byte', '2015', 'For more info, please see the BIC page', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/mnc/mni_icbm152_t1_tal_nlin_sym_09b_hires.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ICBM152_Space/nii/mni_icbm152_t1_tal_nlin_sym_09b_hires.nii'],
    // MNI ADNI Space
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_100um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_100um_adni.nii.gz'],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_200um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_200um_adni.nii.gz'],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_300um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_300um_adni.nii.gz'],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full16_400um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full16_400um_adni.nii.gz'],
    ['Full volume, 100um', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_100um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_100um_adni.nii.gz'],
    ['Full volume, 200um', '200um isotropic (696x770x605)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volume/MNI-ADNI_Space/mnc/full8_200um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volume/MNI-ADNI_Space/nii/full8_200um_adni.nii.gz'],
    ['Full volume, 300um', '300um isotropic (465x515x403)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_300um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_300um_adni.nii.gz'],
    ['Full volume, 400um', '400um isotropic (348x385x303)', '8-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/mnc/full8_400um_adni.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/MNI-ADNI_Space/nii/full8_400um_adni.nii.gz'],
    // Histological Space
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_100um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_100um_optbal.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_200um_optbal.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_300um_optbal.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full16_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full16_400um_optbal.nii.gz'],
    ['Full volume, 1000um with optical balancing', '1000um isotropic (TODO)', '16-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_1000um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_1000um_optbal.nii.gz'],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_100um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_100um_optbal.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_200um_optbal.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_300um_optbal.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_400um_optbal.nii.gz'],
    ['Full volume, 1000um with optical balancing', '1000um isotropic (TODO)', '8-bit gray scale unsigned byte', '2015', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/mnc/full8_1000um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Volumes/Histological_Space/nii/full8_1000um_optbal.nii.gz'],
    // 2013 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full volume, 100um without optical balancing', '100um isotropic (1970x2330x1890)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_2009b_sym.mnc', 'File too large'],
    ['Full volume, 100um with optical balancing', '100um isotropic (1970x2330x1890)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_optbal_2009b_sym.mnc', 'File too large'],
    ['Full volume, 200um without optical balancing', '200um isotropic (985x1165x945)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_2009b_sym.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (985x1165x945)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal_2009b_sym.mnc', 'File too large'],
    ['Full volume, 300um without optical balancing', '300um isotropic (657x777x630)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_2009b_sym.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (657x777x630)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal_2009b_sym.nii.gz'],
    ['Full volume, 400um without optical balancing', '400um isotropic (493x583x473)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_2009b_sym.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (493x583x473)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal_2009b_sym.nii.gz'],
    ['Full volume, 100um without optical balancing', '100um isotropic (1970x2330x1890)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_2009b_sym.mnc', 'File too large'],
    ['Full volume, 100um with optical balancing', '100um isotropic (1970x2330x1890)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_optbal_2009b_sym.mnc', 'File too large'],
    ['Full volume, 200um without optical balancing', '200um isotropic (985x1165x945)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_2009b_sym.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (985x1165x945)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal_2009b_sym.nii.gz'],
    ['Full volume, 300um without optical balancing', '300um isotropic (657x777x630)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_2009b_sym.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (657x777x630)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal_2009b_sym.nii.gz'],
    ['Full volume, 400um without optical balancing', '400um isotropic (493x583x473)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_2009b_sym.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (493x583x473)', '8-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal_2009b_sym.nii.gz'],
    ['ICBM 2009b Symmetric Template', '500um isotropic', '8-bit gray scale unsigned byte', '2013', 'For more info, please see the BIC page', '', ''],
    // 7T syn24 template in MNI Space
    ['Full volume, 400um', '400um isotropic (454x544x454)', 'float', '2013', 'See template "7T syn24 template, 400um"', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full-xz-avg9-pad20_n3_csffill_regSyn24_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full-xz-avg9-pad20_n3_csffill_regSyn24_400um.nii.gz'],
    ['7T syn24 template, 400um', '400um isotropic (454x544x454)', 'float', '2013', 'This model is provided by the Max Planck Institute for Human Cognitive and Brain Sciences, Department of Neurophysics (contact: Dr. Pierre-Louis Bazin, bazin@cbs.mpg.de).', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/syn24-average-t1map-lvl2-10.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/syn24-average-t1map-lvl2-10.nii.gz'],
    // Histological Space
    ['Full volume, 100um without optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um.mnc', 'File too large'],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_100um_optbal.mnc', 'File too large'],
    ['Full volume, 200um without optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_200um_optbal.nii.gz'],
    ['Full volume, 300um without optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_300um_optbal.nii.gz'],
    ['Full volume, 400um without optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '16-bit gray scale unsigned short', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full16_400um_optbal.nii.gz'],
    ['Full volume, 100um without optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um.mnc', 'File too large'],
    ['Full volume, 100um with optical balancing', '100um isotropic (1392x1541x1209)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_100um_optbal.mnc', 'File too large'],
    ['Full volume, 200um without optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um.nii.gz'],
    ['Full volume, 200um with optical balancing', '200um isotropic (696x770x605)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_200um_optbal.nii.gz'],
    ['Full volume, 300um without optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um.nii.gz'],
    ['Full volume, 300um with optical balancing', '300um isotropic (465x515x403)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_300um_optbal.nii.gz'],
    ['Full volume, 400um without optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um.nii.gz'],
    ['Full volume, 400um with optical balancing', '400um isotropic (348x385x303)', '8-bit gray scale unsigned byte', '2013', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2013/3D_Volumes/full8_400um_optbal.nii.gz'],
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
      filter: {
        name: 'Minc',
        type: 'text',
      },
    },
    {
      label: 'NIFTI',
      show: true,
      filter: {
        name: 'NIFTI',
        type: 'text',
      },
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
    let reactElement;
    switch (column) {
      case 'PSCID':
        const url = `${this.props.baseURL}/${rowData.DCCID}/`;
        reactElement = <td><a href={url}>{rowData.PSCID}</a></td>;
        break;
      default:
        reactElement = <td>{cell}</td>;
        break;
    }
    return reactElement;
  };

  return (
    <FilterableDataTable
      name={'filterableBrainVolumes'}
      data={data}
      fields={fields}
      getFormattedCell={formatColumn}
    />
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
