import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

export interface ICardListModalProps {
    open: boolean
    handleOpen: () => void
}

export function CardListModal({ open, handleOpen }: ICardListModalProps) {
    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md lg:max-w-[1428px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900">
                                        <div className="text-right text-2xl">
                                            <span className="cursor-pointer" onClick={handleOpen}>
                                                X
                                            </span>
                                        </div>
                                        <div className="w-full flex flex-row justify-center items-center text-lg">
                                            <div className="bg-[#FFC947] px-10 py-2 rounded-lg border-2 border-black shadow">
                                                타로 카드 유형 전체 보기
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <div className="flex flex-row justify-center items-center flex-wrap w-full gap-5 mt-6">
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                        <Image
                                            className="w-[calc(30%-5px)]"
                                            src="thelover.svg"
                                            width={99}
                                            height={152}
                                            alt={''}
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            {/* <Dialog
                className="w-[361px] y-screen"
                open={open}
                handler={handleOpen}
                placeholder={undefined}>
                <DialogHeader placeholder={undefined}>
                    <div className="w-full flex flex-row justify-center items-center text-lg">
                        <div className="bg-[#FFC947] px-10 py-2 rounded-lg border-2 border-black shadow">
                            타로 카드 유형 전체 보기
                        </div>
                    </div>
                </DialogHeader>
                <DialogBody placeholder={undefined}>
                    <div className="flex flex-row justify-center items-center flex-wrap w-full gap-5">
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                        <Image
                            className="w-[calc(30%-5px)]"
                            src="thelover.svg"
                            width={99}
                            height={152}
                            alt={''}
                        />
                    </div>
                </DialogBody>
                <DialogFooter placeholder={undefined}>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                        placeholder={undefined}>
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog> */}
        </>
    )
}
