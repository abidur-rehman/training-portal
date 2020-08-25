import React, { forwardRef, useRef, useEffect, useMemo } from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import { Styles, Pagination, TableStyle, TRow, CustomButton, ProgressContainer, ProgressFiller, ProgressLabel } from './my-courses.component.styles';

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

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
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


  // Render the UI for your table
  return (
    <>
      <TableStyle {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <TRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                // return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </TRow>
          )
        })}
        </tbody>
      </TableStyle>
      {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
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
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </Pagination>
    </>
  )
}

const MyCourses = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Time spent (mins)',
        accessor: 'time',
      },
      {
        Header: 'Progress',
        accessor: 'progress',
      },
      {
        Header: 'Score',
        accessor: 'score',
      },
      {
        Header: 'Status',
        accessor: 'status',
      }
    ],
    []
  )

  const data = [
    { name: 'Understanding java mechanics 1', time: 190, progress: getProgress(100), score: 87, status: 'Completed' },
    { name: 'How to program HTML', time: 83, progress: getProgress(12), score: 0, status: 'In progress' },
    { name: 'Lets code', time: 10, progress: getProgress(90), score: 0, status: 'In progress' },
    { name: 'Testing frameworks', time: 0, progress: getProgress(0), score: 21, status: 'Not started' },
    { name: 'Software design and implementation', time: 119, progress: getProgress(100), score: 70, status: 'Completed' },
    { name: 'How to program Javascript', time: 45, progress: getProgress(100), score: 98, status: 'Completed' },
    { name: 'Understanding java mechanics 2', time: 0, progress: getProgress(50), score: 0, status: 'In progress' },
    { name: 'Learning React basics with examples', time: 0, progress: getProgress(0), score: 0, status: 'Not started' },
    { name: 'Software design and implementation', time: 120, progress: getProgress(100), score: 21, status: 'Completed' },
    { name: 'Testing frameworks', time: 6, progress: getProgress(12), score: 0, status: 'In progress' },
    { name: 'How to program HTML', time: 10, progress: getProgress(67), score: 0, status: 'In progress' },
    { name: 'Understanding java mechanics 1', time: 12, progress: getProgress(39), score: 0, status: 'In progress' },
    { name: 'Nodejs Basics 1', time: 1, progress: getProgress(33), score: 0, status: 'In progress' },
    { name: 'Kubernetes Architecture', time: 72, progress: getProgress( 2), score: 0, status: 'In progress' },
    { name: 'Kubernetes with Docker', time: 11, progress: getProgress( 98), score: 0, status: 'In progress' },
    { name: 'Amazon Web Services (AWS)', time: 9, progress: getProgress( 32), score: 0, status: 'In progress' },
    { name: 'Deployment with Terraform', time: 65, progress: getProgress( 12), score: 0, status: 'In progress' },
    { name: 'Testing Applications', time: 2, progress: getProgress( 65), score: 0, status: 'In progress' },
    { name: 'Automate Application', time: 1, progress: getProgress( 12), score: 0, status: 'In progress' },
    { name: 'Software design and implementation with Examples', time: 1, progress: getProgress( 12), score: 0, status: 'In progress' },
    { name: 'Lets code 2', time: 1, progress: getProgress( 12), score: 0, status: 'In progress' },
    { name: 'Learning Python', time: 5, progress: getProgress( 27), score: 0, status: 'In progress' },
    { name: 'Assembling your own machine', time: 1, progress: getProgress( 88), score: 0, status: 'In progress' },
    { name: 'Azure from Microsoft', time: 9, progress: getProgress( 43), score: 0, status: 'In progress' },
    { name: 'Learning basics of programming', time: 1, progress: getProgress( 19), score: 0, status: 'In progress' },
    { name: 'Nodejs Basics 2', time: 12, progress: getProgress( 3), score: 0, status: 'In progress' },
    { name: 'Learn how to code', time: 120, progress: getProgress( 100), score: 70, status: 'Completed' },
  ];

  // const dataOld = useMemo(() => makeData(29), [])
  const dataNew = useMemo(() => data, [data])

  return (
    <Styles>
      <Table columns={columns} data={dataNew} />
    </Styles>
  )
}

export default MyCourses;