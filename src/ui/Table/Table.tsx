import { Fragment, useEffect } from 'react'
import {
	flexRender,
	Row,
	RowData,
	TableOptions,
	useReactTable
} from '@tanstack/react-table'

import { Pagination } from 'components/common'

import * as S from './Table.styled'

import SortIcon from 'public/icons/sort.svg'

interface TableProps<TData> {
	options: TableOptions<TData>
	noPagination?: boolean
	isLoading?: boolean
	noDataText?: string
	renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement
	onRowClick?: (row: Row<TData>) => void
}

export const Table = <TData extends RowData>({
	options,
	noPagination = false,
	isLoading,
	noDataText,
	renderSubComponent,
	onRowClick
}: TableProps<TData>) => {
	const table = useReactTable<TData>(options)

	const currentPage = table.getState().pagination.pageIndex
	const isDataEmpty = options.data?.length === 0

	useEffect(() => {
		table.setPageIndex(0)
	}, [table, options.pageCount])

	return (
		<S.TableContainer>
			<S.TableContainerScroll grow={Boolean(isLoading) || isDataEmpty}>
				{isLoading ? <S.Skeleton /> : null}

				{!isLoading && !isDataEmpty ? (
					<S.Table>
						<S.TableHead>
							{table.getHeaderGroups().map((headerGroup) => (
								<S.TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										const sortable = Boolean(options.state?.sorting)
										const isColumnSortable =
											typeof header.column.columnDef.enableSorting === 'undefined'

										return (
											<S.TableCell
												key={header.id}
												sortable={sortable}
												colSpan={header.colSpan}
											>
												<span>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext()
														  )}

													{sortable && isColumnSortable && header.id !== 'actions' ? (
														<S.SortButton
															{...{
																onClick: header.column.getToggleSortingHandler()
															}}
														>
															<SortIcon />
														</S.SortButton>
													) : null}
												</span>
											</S.TableCell>
										)
									})}
								</S.TableRow>
							))}
						</S.TableHead>

						<S.TableBody>
							{table.getRowModel().rows.map((row) => {
								return (
									<Fragment key={row.id}>
										<S.TableRow
											onClick={() => {
												row.toggleExpanded()

												if (onRowClick) {
													onRowClick(row)
												}
											}}
										>
											{row.getVisibleCells().map((cell) => (
												<S.TableCell key={cell.id}>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</S.TableCell>
											))}
										</S.TableRow>

										{renderSubComponent && row.getIsExpanded()
											? renderSubComponent({ row })
											: null}
									</Fragment>
								)
							})}
						</S.TableBody>
					</S.Table>
				) : null}

				{!isLoading && isDataEmpty && noDataText ? (
					<S.NoDataText variant="h2" as="p">
						{noDataText}
					</S.NoDataText>
				) : null}
			</S.TableContainerScroll>

			{!noPagination ? (
				<Pagination
					page={currentPage}
					pageCount={table.getPageCount()}
					isLoading={isLoading}
					onFirst={() => {
						table.setPageIndex(0)
					}}
					onPrev={table.previousPage}
					onNext={table.nextPage}
					onLast={() => {
						table.setPageIndex(table.getPageCount())
					}}
				/>
			) : null}
		</S.TableContainer>
	)
}
