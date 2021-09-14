import React from 'react';
import FilterableDataTable from 'jsx/FilterableDataTable';


/**
 * BrainSurfaces component
 * @return {JSX.Element}
 */
const BrainSurfaces = () => {
  // data for filter table.
  const data = [
    // 2015 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Grey Left', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/gray_left_327680_2009b_sym.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/gray_left_327680_2009b_sym.surf.gii', '17 MB', '7.5 MB'],
    ['Grey Right', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/gray_right_327680_2009b_sym.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/gray_right_327680_2009b_sym.surf.gii', '16.9 MB', '7.5 MB'],
    ['White Left', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/white_left_327680_2009b_sym.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/white_left_327680_2009b_sym.surf.gii', '17 MB', '7.5 MB'],
    ['White Right', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/white_right_327680_2009b_sym.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/white_right_327680_2009b_sym.surf.gii', '16.9 MB', '7.5 MB'],
    // Histological Space
    ['Grey Left', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/gray_left_327680.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/gray_left_327680.surf.gii', '17 MB', '7.5 MB'],
    ['Grey Right', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/gray_right_327680.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/gray_right_327680.surf.gii', '16.9 MB', '7.5 MB'],
    ['White Left', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/white_left_327680.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/white_left_327680.surf.gii', '17 MB', '7.5 MB'],
    ['White Right', '327680 Triangles', '2015', '', '', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/MNI-obj/white_right_327680.obj', 'https://bigbrain-ftp.loris.ca/bigbrain-ftp/BigBrainRelease.2015/3D_Surfaces/Apr7_2016/gii/white_right_327680.surf.gii', '16.8 MB', '7.5 MB'],
    // 2013 -------------------/
    // MNI ICBM 152 Space (ICBM 2009b Nonlinear Symmetric)
    ['Grey Left', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surface.php&script=get_surfaces.php&release=2013&file=gray_left_327680_2009b_sym.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surface.php&script=get_surfaces.php&release=2013&file=gray_left_327680_2009b_sym.gii', '18 MB', '8 MB'],
    ['Grey Right', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=gray_right_327680_2009b_sym.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=gray_right_327680_2009b_sym.gii', '18 MB', '8 MB'],
    ['White Left', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680_2009b_sym.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680_2009b_sym.gii', '18 MB', '8 MB'],
    ['White Right', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_right_327680_2009b_sym.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_right_327680_2009b_sym.gii', '18 MB', '8 MB'],
    // 7T syn24 template in MNI Space (No Data)
    // Histological Space
    ['Grey Left', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surface.php&script=get_surfaces.php&release=2013&file=gray_left_327680.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surface.php&script=get_surfaces.php&release=2013&file=gray_left_327680.gii', '18 MB', '8 MB'],
    ['Grey Right', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=gray_right_327680.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=gray_right_327680.gii', '18 MB', '8 MB'],
    ['White Left', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680.gii', '18 MB', '8 MB'],
    ['White Right', '327680 Triangles', '2013', '', '', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680.obj', 'https://bigbrain.loris.ca/AjaxHelper.php?Module=brainsurfaces&get_surfaces.php&script=get_surfaces.php&release=2013&file=white_left_327680.gii', '18 MB', '8 MB'],
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
          'Grey Left': 'Grey Left',
          'Grey Right': 'Grey Right',
          'White Left': 'White Left',
          'White Right': 'White Right',
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
      label: 'Obj',
      show: true,
    },
    {
      label: 'GIFTI',
      show: true,
    },
    {
      label: 'ObjFileSize',
      show: false,
    },
    {
      label: 'GIFTIFileSize',
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
      case 'Obj':
        if (cell !== '') {
          reactElement = <td><a href={cell} target='_blank'>
            Obj ({rowData['ObjFileSize']})
          </a></td>;
        }
        break;
      case 'GIFTI':
        if (cell !== '' & cell !== 'File too large') {
          reactElement = <td><a href={cell} target='_blank'>
            GIFTI ({rowData['GIFTIFileSize']})
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
      <h1>3D Surface Data Release</h1>
      <FilterableDataTable
        name={'filterableBrainSurfaces'}
        data={data}
        fields={fields}
        getFormattedCell={formatColumn}
      />
    </>
  );
};
BrainSurfaces.defaultProps = {
  url: {
    base: '',
  },
};

/**
 * Render component on page load.
 */
window.addEventListener('load', () => {
  ReactDOM.render(
    <BrainSurfaces
      url={{
        base: loris.BaseURL,
      }}
    />,
    document.getElementById('lorisworkspace')
  );
});
