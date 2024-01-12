import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'

import the_star from '../../../public/the_star.gif'
import the_lovers from '../../../public/the_lovers.gif'
import the_money from '../../../public/the_money.gif'
import the_magician from '../../../public/the_magician.gif'
import the_world from '../../../public/the_world.gif'
import the_sun from '../../../public/the_sun.gif'
import the_strength from '../../../public/the_strength.gif'
import the_chariot from '../../../public/the_chariot.gif'
import the_emperor from '../../../public/the_emperor.gif'
import the_hermit from '../../../public/the_hermit.gif'
import ace_of_wands from '../../../public/ace_of_wands.gif'

export interface ICardListModalProps {
    open: boolean
    handleOpen: () => void
}

const imageList = [
    the_star,
    the_lovers,
    the_money,
    the_magician,
    the_world,
    the_sun,
    the_strength,
    the_chariot,
    the_emperor,
    the_hermit,
    ace_of_wands,
]

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
                                        <div className="w-full flex flex-row justify-center items-center text-lg lg:text-3xl">
                                            <div className="bg-[#FFC947] px-10 py-2 rounded-lg border-2 border-black shadow">
                                                타로 카드 유형 전체 보기
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <div className="flex flex-row justify-center items-center flex-wrap gap-5 mt-6">
                                        {imageList.map((item, index) => (
                                            <>
                                                <div key={index} className="w-[calc(30%-5px)]">
                                                    <Image
                                                        // src={`/${item}.gif`}
                                                        src={item}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        alt={''}
                                                    />
                                                </div>
                                            </>
                                        ))}
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
