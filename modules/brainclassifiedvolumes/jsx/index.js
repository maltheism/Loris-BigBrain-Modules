import React from 'react';
import FilterableDataTable from 'jsx/FilterableDataTable';


/**
 * BrainClassifiedVolumes component
 * @return {JSX.Element}
 */
const BrainClassifiedVolumes = () => {
  // data for filter table.
  const data = [
    // 2015 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_100um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_100um_2009b_sym.nii.gz', '163 MB', '141 MB'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_200um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_200um_2009b_sym.nii.gz', '28.1 MB', '24.9 MB'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_300um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_300um_2009b_sym.nii.gz', '10 MB', '8.8 MB'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_400um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_400um_2009b_sym.nii.gz', '4.7 MB', '4.2 MB'],
    ['Full Classified Volume, 1000um', '1000um isotropic (TODO)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/full_cls_1000um_2009b_sym.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/MNI-ICBM152_Space/nii/full_cls_1000um_2009b_sym.nii.gz', '474 kB', '406 kB'],
    // Histological Space
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_100um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_100um.nii.gz', '77 MB', '65.4 MB'],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_200um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_200um.nii.gz', '13.2 MB', '11.6 MB'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_300um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_300um.nii.gz', '4.7 MB', '4.1 MB'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_400um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_400um.nii.gz', '2.3 MB', '2 MB'],
    ['Full Classified Volume, 400um', '1000um isotropic (493x583x473)', '8-bit unsigned byte', '2015', '', '', 'ftp://bigbrain.loris.ca/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/full_cls_1000um.mnc', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Classified_Volumes/Histological_Space/nii/full_cls_1000um.nii.gz', '239 kB', '197 kB'],
    // 2013 ---------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_surface.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_100um_2009b_sym.mnc', 'File too large', '171 MB', ''],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um_2009b_sym.nii.gz', '30 MB', '26 MB'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um_2009b_sym.nii.gz', '10 MB', '9 MB'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um_2009b_sym.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um_2009b_sym.nii.gz', '5 MB', '4 MB'],
    // 7T syn24 template in MNI Space (No Data)
    // Histological Space
    ['Full Classified Volume, 100um', '100um isotropic (1970x2330x1890)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_surface.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_100um.mnc', 'File too large', '78 MB', ''],
    ['Full Classified Volume, 200um', '200um isotropic (985x1165x945)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_200um.nii.gz', '13 MB', '12 MB'],
    ['Full Classified Volume, 300um', '300um isotropic (657x777x630)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_300um.nii.gz', '5 MB', '4 MB'],
    ['Full Classified Volume, 400um', '400um isotropic (493x583x473)', '8-bit unsigned byte', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um.mnc', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainclassifiedvolumes&get_classifiedvolumes.php&script=get_classifiedvolumes.php&release=2013&file=full_cls_400um.nii.gz', '2 MB', '2 MB'],
  ];
  // fields configured for filter.
  const fields = [
    {
      label: 'Description',
      show: true,
      filter: {
        name: 'Description',
        type: 'select',
        options: {
          'Full Classified Volume, 100um': 'Full Classified Volume, 100um',
          'Full Classified Volume, 200um': 'Full Classified Volume, 200um',
        },
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
        type: 'select',
        options: {
          '8-bit unsigned byte': '8-bit unsigned byte',
        },
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
      label: 'View',
      show: false,
      filter: {
        name: 'View',
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
        break;
      default:
        break;
    }
    return reactElement;
  };

  return (
    <>
      <h1>3D Classified Volumes Data Release</h1>
      <FilterableDataTable
        name={'filterableBrainClassifiedVolumes'}
        data={data}
        fields={fields}
        getFormattedCell={formatColumn}
      />
    </>
  );
};
BrainClassifiedVolumes.defaultProps = {
  url: {
    base: '',
  },
};

/**
 * Render component on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <BrainClassifiedVolumes
      url={{
        base: loris.BaseURL,
      }}
    />,
    document.getElementById('lorisworkspace')
  );
});
