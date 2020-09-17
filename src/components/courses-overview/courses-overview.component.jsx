import React, { forwardRef, useRef, useEffect, useMemo } from 'react'
import { useTable, usePagination, useRowSelect, useSortBy,
  useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { Styles, Pagination, TableStyle, TRow, CustomButton,
  ProgressContainer, ProgressFiller, ProgressLabel, Span } from './courses-overview.component.styles';
import CustomSelect from '../custom-select/select.component';

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  )
}

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

const getProgress = (progress) => {
  return (
    <ProgressContainer>
      <ProgressFiller completed={progress}>
        <ProgressLabel/>
      </ProgressFiller>
    </ProgressContainer>
  );
}

const getActions = (item, index) => {
  const temp = {
    name: item.courseName, videoUrl: `data/videos/${item.courseUrl}`,
    courseId: item.cid, timeSpent: item.timeSpent, progress: item.progress
  }
  return (
    <CustomSelect item={temp}/>
  );
}



const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  return (
    <>
      <TableStyle {...getTableProps()}>
        <thead>
        <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: 'left',
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {headerGroups.map(headerGroup => (
          <TRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <Span>
                  {
                    column.Header === 'Name' ? column.isSortedDesc ? "   🔽" : "   🔼" : ""
                  }
                </Span>
              </th>
            ))}
          </TRow>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <TRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </TRow>
          )
        })}
        </tbody>
      </TableStyle>
      <Pagination>
        <CustomButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </CustomButton>{' '}
        <CustomButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </CustomButton>{' '}
        <CustomButton onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </CustomButton>{' '}
        <CustomButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </CustomButton>{' '}
        <span>
          Page{' '}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </Pagination>
    </>
  )
}

const CoursesOverview = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'courseName',
        sortType: 'basic'
      },
      {
        Header: 'Time spent (mins)',
        accessor: 'timeSpent',
      },
      {
        Header: 'Progress',
        accessor: 'progress',
      },
      {
        Header: 'Action',
        accessor: 'action',
      }
    ],
    []
  )

  const dataTemp = data.map((item, index) => {
    let temp = Object.assign({}, item);
    let progressTemp = item.progress;
    temp.progress = getProgress(progressTemp);
    temp.action = getActions(item, index);
    return temp;
  });

  const dataNew = useMemo(() => dataTemp, [dataTemp])

  return (
    <Styles>
      <Table columns={columns} data={dataNew} />
    </Styles>
  )
}

export default CoursesOverview;